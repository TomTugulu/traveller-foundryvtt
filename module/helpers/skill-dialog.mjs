import {rollSkill} from "../helpers/dice-rolls.mjs";

export class MgT2SkillDialog extends Application {
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.template = "systems/mgt2/templates/skill-dialog.html";
        options.width = "auto";
        options.height = "auto";
        options.title = "Make a roll";

        return options;
    }

    constructor(actor, skill, spec, cha) {
        super();
        this.actor = actor;
        const data = actor.data.data;

        this.skillId = skill;
        this.skill = null;
        this.spec = null;
        this.value = data.skills["jackofalltrades"].value - 3;
        this.chaOnly = false;
        this.cha = cha;
        this.expert = 0;
        this.augment = 0;
        this.augdm = 0;
        if (cha && data.characteristics && data.characteristics[cha]) {
            this.characteristic = data.characteristics[cha];
            if (!skill) {
                this.chaOnly = true;
                this.value = 0;
            }
        }
        this.data = data;
        if (skill) {
            this.skill = data.skills[skill];
            this.cha = this.skill.default;
            if (this.skill.expert) {
                this.expert = parseInt(this.skill.expert);
            }
            if (this.skill.augdm && parseInt(this.skill.augdm) > 0) {
                this.augdm = parseInt(this.skill.augdm);
            }
            if (this.skill.trained) {
                this.value = this.skill.value;

                if (this.skill.augment && parseInt(this.skill.augment) > 0) {
                    this.skill.augment = parseInt(this.skill.augment);
                }
                if (spec) {
                    this.spec = data.skills[skill].specialities[spec];
                    this.value = this.spec.value;
                }
            } else {
                this.value = data.skills["jackofalltrades"].value - 3;
            }
            this.options.title = this.skill.label;
        } else if (cha) {
            this.options.title = this.characteristic.label;
            this.value = this.characteristic.dm;
        }
        if (this.spec) {
            this.options.title += " (" + this.spec.label + ")";
        }
    }

    getData() {
        console.log("getData: Characteristic is " + this.cha);
        console.log("getData: Type is " + this.actor.type);
        return {
            "actor": this.actor,
            "data": this.data,
            "skill": this.skill,
            "spec": this.spec,
            "value": this.value,
            "showCha": (this.skill && this.actor.type != "creature"),
            "chaOnly": this.chaOnly,
            "dm": 0,
            "dicetype": "normal",
            "characteristic": this.cha
        }
    }

    activateListeners(html) {
        super.activateListeners(html);
        const roll = html.find("button[class='skillRoll']");
        roll.on("click", event => this.onRollClick(event, html));
    }

    async onRollClick(event, html) {
        event.preventDefault();

        let dm = parseInt(html.find("input[class='skillDialogDM']")[0].value);
        let cha = this.cha;
        let remember = false;
        if (html.find(".skillDialogCha")[0]) {
            cha = html.find(".skillDialogCha")[0].value;
            remember = html.find(".skillDialogRemember")[0].checked;
        }
        let rollType = html.find(".skillDialogRollType")[0].value;
        let difficulty = parseInt(html.find(".skillDialogDifficulty")[0].value);

        if (remember && this.skillId) {
            this.actor.data.data.skills[this.skillId].default = cha;
            this.actor.update({ "data.skills": this.actor.data.data.skills });
        } else if (this.skillId) {
            this.cha = this.actor.data.data.skills[this.skillId].default;
        }
        rollSkill(this.actor, this.skill, this.spec, cha, dm, rollType, difficulty);

        this.close();
    }

    async _updateObject(event, formData) {
        console.log("_updateObject:");
    }
}

window.MgT2SkillDialog = MgT2SkillDialog;
