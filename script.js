/**
 * 初期化
 */
window.onload = function() {
}

/**
 * 「読み込み」ボタン
 */
async function buttonRead() {
    // --------------------------------------------------
    // キャラクターシートの読み込み
    // --------------------------------------------------

    const res = await fetch(document.querySelector('#input_url').value + "&mode=json");
    const data = await res.json();

    // --------------------------------------------------
    // ボーナス値の描画
    // --------------------------------------------------

    // 器用度
    document.querySelectorAll(".statusBonus_tec > .bonusValue").forEach(target => {
        target.textContent = data.bonusDex;
    });

    // 敏捷度
    document.querySelectorAll(".statusBonus_agi > .bonusValue").forEach(target => {
        target.textContent = data.bonusAgi;
    });

    // 筋力
    document.querySelectorAll(".statusBonus_str > .bonusValue").forEach(target => {
        target.textContent = data.bonusStr;
    });

    // 生命力
    document.querySelectorAll(".statusBonus_vit > .bonusValue").forEach(target => {
        target.textContent = data.bonusVit;
    });

    // 知力
    document.querySelectorAll(".statusBonus_int > .bonusValue").forEach(target => {
        target.textContent = data.bonusInt;
    });

    // 精神力
    document.querySelectorAll(".statusBonus_mnd > .bonusValue").forEach(target => {
        target.textContent = data.bonusMnd;
    });

    // --------------------------------------------------
    // 技能レベル
    // --------------------------------------------------

    // 冒険者レベル
    flatRole(data.level, "category_skill_traveler");

    // 戦士系
    flatRole(data.lvFig, "category_skill_fighter");
    flatRole(data.lvGra, "category_skill_grappler");
    flatRole(data.lvFen, "category_skill_fencer");
    flatRole(data.lvSho, "category_skill_shooter");
    flatRole(data.lvBat, "category_skill_battleDancer");

    // 魔法使い系
    flatRole(data.lvSor, "category_skill_sorcerer");
    flatRole(data.lvCon, "category_skill_conjurer");
    flatRole(data.lvPri, "category_skill_priest");
    flatRole(data.lvMag, "category_skill_Magitech");
    flatRole(data.lvFai, "category_skill_fairyTamer");
    flatRole(data.lvDru, "category_skill_druid");
    flatRole(data.lvDem, "category_skill_daemonRuler");
    flatRole(data.lvAby, "category_skill_abyssGazer");

    // その他系
    flatRole(data.lvSco, "category_skill_scout");
    flatRole(data.lvRan, "category_skill_ranger");
    flatRole(data.lvSag, "category_skill_sage");
    flatRole(data.lvEnh, "category_skill_enhancer");
    flatRole(data.lvBar, "category_skill_bard");
    flatRole(data.lvRid, "category_skill_rider");
    flatRole(data.lvAlc, "category_skill_alchemist");
    flatRole(data.lvGeo, "category_skill_geomancer");
    flatRole(data.lvWar, "category_skill_warLeader");
    flatRole(data.lvDar, "category_skill_darkHunter");
    flatRole(data.lvPhy, "category_skill_physicalMaster");
}

/**
 * 平目判定になる技能
 */
function flatRole (skillLevel, targetId) {
    // 技能レベル
    const targetTitle = document.querySelector('#' + targetId + ' .categoryTitle > .bonusValue');

    // 習得していれば処理スキップ
    if (skillLevel >= 1) {
        // 技能レベルをセット
        targetTitle.textContent = skillLevel;

        return;
    }

    // 技能レベルをグレーアウト
    targetTitle.classList.add("flat");

    // 一括チェックＯＦＦ
    const targetCheckBox = document.querySelector('#' + targetId + ' .categoryTitle > input[type="checkbox"]');
    targetCheckBox.checked = false;
    bulkCheck(targetCheckBox)

    // ボーナス値を０にしてグレーアウト
    document.querySelectorAll('#' + targetId + ' [class^="statusBonus_"]').forEach(target => {
        target.querySelector(".bonusValue").textContent = 0;
        target.classList.add("flat");
    });
}

/**
 * 「開閉」ボタン
 */
function toggleAcordion(targerId) {
    document.getElementById(targerId).classList.toggle("close");
}

/**
 * 一括チェックボックス
 */
function bulkCheck($this) {
    // チェック状態をリンク
    document.querySelectorAll('#' + $this.parentElement.parentElement.id + ' input[type="checkbox"]:not(:disabled)').forEach(target => {
        target.checked = $this.checked;
    });
}

/**
 * チャットパレット出力
 */
function outputChatPallet() {
    let text = "";

    // --------------------------------------------------
    // 行為判定
    // --------------------------------------------------

    text += "◆───　行為判定　───◆\r";

    document.querySelectorAll("#area_skill .card_skill").forEach(skill => {
        // チェックボックス
        if (skill.querySelector('input[type="checkbox"]').checked == false) {
            // チェックOFFの場合、無視
            return;
        }

        // 技能
        const nameSkill = skill.parentElement.parentElement.querySelector("span").textContent;
        const level = skill.parentElement.parentElement.querySelector(".bonusValue").textContent;

        // 判定
        const nameRoll = skill.querySelector(".skillName > span").textContent;

        // ボーナス
        const nameBonus = skill.querySelector('[class^="statusBonus_"] > span').textContent;
        const bonus = skill.querySelector(".bonusValue").textContent;

        // チャットコマンドを生成
        text += `2d6+${level}+${bonus}　■${nameRoll}(${nameSkill}+${nameBonus})\r`;
    });

    // テキストエリアに反映
    document.querySelector("#text_chatPallet").value = text;
}