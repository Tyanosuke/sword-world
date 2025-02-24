/**
 * 初期化
 */
window.onload = function() {
}

/**
 * ナビテキストの表示
 */
async function showNaviText(targetId) {
    const naviText = document.getElementById(targetId);
    naviText.classList.add("show");
    window.setTimeout(() => {
        naviText.classList.remove("show");
    }, 1000);
}

/**
 * 「読み込み」ボタン
 */
async function buttonRead() {
    // --------------------------------------------------
    // ローディングON
    // --------------------------------------------------

    const loadingCaver = document.getElementById("loading");
    loadingCaver.classList.remove("hidden");

    // --------------------------------------------------
    // キャラクターシートの読み込み
    // --------------------------------------------------

    // 読み込み処理
    fetch(
        document.querySelector('#input_url input').value + "&mode=json",
        { method: 'GET' }
    )
    .then(response => {
        // 失敗時
        if (!response.ok) {
            console.error('サーバーエラー');
            return;
        }

        // データを取得
        return response.json();
    })
    .then(data => {
        // セッションストレージにデータを保存
        sessionStorage.setItem('data', JSON.stringify(data));

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
        // 条件付き
        // --------------------------------------------------

        // シューター
        const resCheckShooter = checkBattleSkill(data, "combatFeatsLv", "射手の体術");
        document.querySelectorAll(".cond_shooter").forEach(target => {
            if (resCheckShooter) {
                // グレーアウトを解除
                target.classList.remove("skillDisabled");
            } else {
                // グレーアウトを設定
                target.classList.add("skillDisabled");
            }
        });

        // ライダー
        const resCheckRider = checkBattleSkill(data, "craftRiding", "探索指令");
        document.querySelectorAll(".cond_rider").forEach(target => {
            if (resCheckRider) {
                // グレーアウトを解除
                target.classList.remove("skillDisabled");
            } else {
                // グレーアウトを設定
                target.classList.add("skillDisabled");
            }

            // チェックボックスON
            target.querySelector('input[type="checkbox"]').checked = resCheckRider;
        });

        // --------------------------------------------------
        // 技能レベル
        // --------------------------------------------------

        // 一旦、平目を解除
        document.querySelectorAll(".flat").forEach(target => {
            target.classList.remove("flat");
        });

        // 冒険者レベル
        flatRole(data.level, "category_skill_traveler");

        // 戦士系
        flatRole(data.lvFig, "category_skill_fighter");
        flatRole(data.lvGra, "category_skill_grappler");
        flatRole(data.lvFen, "category_skill_fencer");
        flatRole(data.lvSho, "category_skill_shooter");
        // flatRole(data.lvBat, "category_skill_battleDancer");

        // 魔法使い系
        flatRole(data.lvSor, "category_skill_sorcerer");
        flatRole(data.lvCon, "category_skill_conjurer");
        flatRole(data.lvPri, "category_skill_priest");
        flatRole(data.lvMag, "category_skill_magitech");
        flatRole(data.lvFai, "category_skill_fairyTamer");
        // flatRole(data.lvDru, "category_skill_druid");
        // flatRole(data.lvDem, "category_skill_daemonRuler");
        // flatRole(data.lvAby, "category_skill_abyssGazer");

        // その他系
        flatRole(data.lvSco, "category_skill_scout");
        flatRole(data.lvRan, "category_skill_ranger");
        flatRole(data.lvSag, "category_skill_sage");
        flatRole(data.lvEnh, "category_skill_enhancer");
        flatRole(data.lvBar, "category_skill_bard");
        flatRole(data.lvRid, "category_skill_rider");
        flatRole(data.lvAlc, "category_skill_alchemist");
        // flatRole(data.lvGeo, "category_skill_geomancer");
        // flatRole(data.lvWar, "category_skill_warLeader");
        // flatRole(data.lvDar, "category_skill_darkHunter");
        // flatRole(data.lvPhy, "category_skill_physicalMaster");

        // 魔法
        flatRole(data.lvSor, "category_magic_sorcerer");
        flatRole(data.lvCon, "category_magic_conjurer");
        flatRole(data.lvPri, "category_magic_priest");
        flatRole(data.lvMag, "category_magic_magitech");
        flatRole(data.lvFai, "category_magic_fairyTamer");

        // 回避
        flatRole(data.lvFig, "category_dodge_fighter");
        flatRole(data.lvGra, "category_dodge_grappler");
        flatRole(data.lvFen, "category_dodge_fencer");
        flatRole(data.lvSho, "category_dodge_shooter");

        // --------------------------------------------------
        // 攻撃用行為判定
        // --------------------------------------------------

        // キャラクターシートから武器データを取得
        const weapons = getWeapons(data);
        if (weapons == null) {
            null;
        }

        // 要素を削除
        document.querySelector("#area_damage > .addArea").innerHTML = "";

        let prevWeapon = null;
        let weapon_id = 1;
        weapons.forEach(weapon => {
            // --------------------------------------------------
            // テンプレートを編集
            // --------------------------------------------------

            // テンプレートを読み込む
            const template = document.querySelector("#temp_category_weapon");
            const clone = template.content.cloneNode(true);

            // ID
            clone.querySelector(".contents").id = "category_weapon" + weapon_id;

            // 武器名
            clone.querySelector(".acordionTitleRow > h3").textContent = (weapon[0]) ? weapon[0] : prevWeapon[0] + ":" + weapon[7];
            // if (weapon[6] != undefined) {
            //     clone.querySelector(".acordionTitleRow > h3").textContent += `(${weapon[6]})`;
            // }

            if (weapon[1] == undefined) {
                clone.querySelector(".categoryTitle > span").textContent = "平目";
                clone.querySelector(".statusBonus_tec").classList.add("flat");
                clone.querySelector(".statusBonus_str").classList.add("flat");
            } else {
                // 技能名
                clone.querySelector(".categoryTitle > span").textContent = weapon[1];

                // 技能レベル
                let value = 0;
                switch (weapon[1]) {
                    case "ファイター" :
                        value = data.lvFig;
                        break;
                    case "グラップラー" :
                        value = data.lvGra;
                        break;
                    case "フェンサー" :
                        value = data.lvFen;
                        break;
                    case "シューター" :
                        value = data.lvSho;
                        break;
                }
                clone.querySelector(".categoryTitle > .bonusValue").textContent = value;

                // 命中率：器用度
                clone.querySelector(".statusBonus_tec > .bonusValue").textContent = data.bonusDex;

                // ダメージ：筋力
                clone.querySelector(".statusBonus_str > .bonusValue").textContent = data.bonusStr;
            }

            // 命中力：器用度：修正
            if (weapon[4] > 0) {
                clone.querySelector(".value_add > .bonusValue").textContent = weapon[4];
            }

            // ダメージ：威力表
            clone.querySelector(".value_rate > .bonusValue").textContent = (weapon[2]) ? weapon[2] : 0;

            // ダメージ：威力表：修正
            if (weapon[3] > 0) {
                clone.querySelector(".value_rate > .addRate").textContent = "+" + weapon[3];
            }

            // ダメージ：C値
            clone.querySelector(".value_crit > .bonusValue").textContent = (weapon[5]) ? weapon[5] : 0;

            // --------------------------------------------------
            // 要素を挿入
            // --------------------------------------------------

            document.querySelector("#area_damage > .addArea").appendChild(clone);

            // --------------------------------------------------
            // 次の準備
            // --------------------------------------------------

            // id
            weapon_id++;

            // 前の武器
            prevWeapon = weapon;
        })

        // --------------------------------------------------
        // チャットパレットの生成
        // --------------------------------------------------

        outputChatPallet(false);

        // --------------------------------------------------
        // ナビテキストの表示
        // --------------------------------------------------

        showNaviText("navi_read");

    })
    .catch(error => {
        // ナビテキストの表示
        showNaviText("navi_read_error");

        return;
    })

    .finally(() => {
        // --------------------------------------------------
        // ローディングOFF
        // --------------------------------------------------

        loadingCaver.classList.add("hidden");
    });
}

/**
 * 平目判定になる技能
 */
function flatRole (skillLevel, targetId) {
    // 技能レベル
    const targetTitle = document.querySelector('#' + targetId + ' .categoryTitle > .bonusValue');

    // チェックボックス
    const targetCheckBox = document.querySelector('#' + targetId + ' .categoryTitle > input[type="checkbox"]');

    // 習得していれば処理スキップ
    if (skillLevel >= 1) {
        // 技能レベルをセット
        targetTitle.textContent = skillLevel;

        // 一括チェックＯＮ
        targetCheckBox.checked = true;
        bulkCheck(targetCheckBox)
    } else {
        // 技能レベルをセット
        targetTitle.textContent = 0;

        // 技能レベルをグレーアウト
        targetTitle.classList.add("flat");

        // 一括チェックＯＦＦ
        targetCheckBox.checked = false;
        bulkCheck(targetCheckBox)

        // ボーナス値を０にしてグレーアウト
        document.querySelectorAll('#' + targetId + ' [class^="statusBonus"]:not(.fixed)').forEach(target => {
            target.querySelector(".bonusValue").textContent = 0;
            target.classList.add("flat");
        });
    }
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
    document.querySelectorAll('#' + $this.parentElement.parentElement.id + ' .card_skill:not(.skillDisabled) > input[type="checkbox"]')
    .forEach(target => {
        target.checked = $this.checked;
    });
}

/**
 * 装備のチェック
 */
function getWeapons (data) {
    const cnt = data.weaponNum;

    if (cnt == 0) {
        return null;
    }

    let list = [];

    for (let i = 1; i <= cnt; i++) {
        const target = [
            data[`weapon${i}Name`],
            data[`weapon${i}Class`],
            data[`weapon${i}Rate`],
            data[`weapon${i}Dmg`],
            data[`weapon${i}Acc`],
            data[`weapon${i}Crit`],
            data[`weapon${i}Note`],
            data[`weapon${i}Usage`],
        ];

        list.push(target);
    }

    return list;
}

/**
 * 戦闘特技の習得チェック
 */
function checkBattleSkill(data, skillCategory, targetName) {
    // 指定した戦闘特技を習得しているか
    for (let i = 1; i <= 17; i++) {
        const target = data[skillCategory + i];
        if (
            target != undefined
            && target == targetName
        ) {
            return true;
        }
    }

    return false;
}

/**
 * チャットパレット出力
 */
function outputChatPallet(navi = true) {
    let text = "";

    // --------------------------------------------------
    // 非戦闘用
    // --------------------------------------------------

    text += "🟢非戦闘用\r";

    document.querySelectorAll("#area_skill .card_skill").forEach(skill => {
        // チェックボックス
        if (skill.querySelector('input[type="checkbox"]').checked == false) {
            // チェックOFFの場合、無視
            return;
        }

        // 技能
        const nameSkill = skill.parentElement.parentElement.querySelector("span").textContent;

        // 判定
        const nameRoll = skill.querySelector(".skillName > span").textContent;

        // ボーナス
        const nameBonus = skill.querySelector('[class^="statusBonus_"] > span').textContent;

        // ●平目
        if (skill.parentElement.parentElement.querySelector(".bonusValue.flat")) {
            // チャットコマンドを生成
            text += `2d6　■${nameRoll}(平目)\r`;
        }
        // ●通常
         else {
            // チャットコマンドを生成
            text += `2d6+{${nameSkill}}+{${nameBonus}}　■${nameRoll}(${nameSkill}+${nameBonus})\r`;
        }
    });

    // --------------------------------------------------
    // 戦闘用：武器
    // --------------------------------------------------

    text += "🔴戦闘用：武器\r";

    document.querySelectorAll('#area_damage .acordionArea').forEach(weapon => {
        // チェックボックス
        if (weapon.querySelector('.categoryTitle > input[type="checkbox"]').checked == false) {
            // チェックOFFの場合、無視
            return;
        }

        // 技能
        const nameWeapon = weapon.querySelector(".acordionTitleRow > h3").textContent;

        // 判定
        const nameSkill = weapon.querySelector(".categoryTitle > span").textContent;

        // 命中力：修正
        const valueTecAdd = weapon.querySelector(".value_add > .bonusValue").textContent;

        // ダメージ：威力表
        const valueRate = weapon.querySelector(".value_rate > .bonusValue").textContent;
        const valueRateAdd = weapon.querySelector(".value_rate > .addRate").textContent;

        // ダメージ：Ｃ値
        const valueCrit = weapon.querySelector(".value_crit > .bonusValue").textContent;

        // ●平目
        if (weapon.parentElement.parentElement.querySelector(".value_rate.flat")) {
            // チャットコマンドを生成
            text += `2d6　■${nameWeapon}／命中力(平目)\r`;
            text += `k${valueRate}@${valueCrit}　■${nameWeapon}／ダメージ(平目)\r`;
        }
        // ●通常
         else {
            // チャットコマンドを生成
            text += `2d6+{${nameSkill}}+{器用度}+${valueTecAdd}+{命中修正}　■${nameWeapon}／命中力\r`;
            text += `k${valueRate}@${valueCrit}+{${nameSkill}}+{筋力}${valueRateAdd}　■${nameWeapon}／ダメージ\r`;
        }
    });


    // --------------------------------------------------
    // 戦闘用：魔法
    // --------------------------------------------------

    text += "🔴戦闘用：魔法\r";

    document.querySelectorAll("#area_magic .card_skill").forEach(magic => {
        // チェックボックス
        if (magic.querySelector('input[type="checkbox"]').checked == false) {
            // チェックOFFの場合、無視
            return;
        }

        // 技能
        const nameSkill = magic.parentElement.parentElement.querySelector("span").textContent;

        // 威力
        const valueRate = magic.querySelector('.statusBonus.value_rate > .bonusValue').textContent;

        // ボーナス能力名
        const nameBonus = magic.querySelector('[class^="statusBonus_"] > span').textContent;

        // ●平目
        if (magic.parentElement.parentElement.querySelector(".bonusValue.flat")) {
            // チャットコマンドを生成
            text += `2d6　■${nameRoll}(平目)\r`;
        }
        // ●通常
         else {
            // チャットコマンドを生成
            text += `k${valueRate}@10+{${nameSkill}}+{${nameBonus}}　■威力${valueRate}(${nameSkill}+${nameBonus})\r`;
        }
    });

    // --------------------------------------------------
    // 戦闘用：回避
    // --------------------------------------------------

    text += "🔴戦闘用：回避\r";

    document.querySelectorAll('#area_dodge .card_skill').forEach(skill => {
        // チェックボックス
        if (skill.parentElement.parentElement.querySelector('input[type="checkbox"]').checked == false) {
            // チェックOFFの場合、無視
            return;
        }

        // 判定
        const nameSkill = skill.parentElement.parentElement.querySelector(".categoryTitle > span").textContent;

        // 命中力：修正
        const valueTecAdd = skill.querySelector(".statusBonus_agi > .bonusValue").textContent;

        // チャットコマンドを生成
        text += `2d6+{${nameSkill}}+{敏捷度}+${valueTecAdd}+{回避修正}　■回避力(${nameSkill}+敏捷度)\r`;
    });

    // --------------------------------------------------

    // テキストエリアに反映
    document.querySelector("#text_chatPallet").value = text;

    // --------------------------------------------------

    // ナビテキストの表示
    if (navi) {
        showNaviText("navi_reset");
    }
}

/**
 * コマデータ出力
 */
async function outputCharacter() {
    // --------------------------------------------------
    // セッションストレージからデータを取得
    // --------------------------------------------------

    let data = JSON.parse(sessionStorage.getItem("data"));

    // --------------------------------------------------
    // データを生成
    // --------------------------------------------------

    let characterData = {
        "kind": "character",
        "data": {
            "name": data.characterName,
            "memo": null,
            "externalUrl": document.querySelector('#input_url input').value,
            "status": [
                {
                    "label": "HP",
                    "value": data.hpTotal,
                    "max": data.hpTotal,
                },
                {
                    "label": "MP",
                    "value": data.mpTotal,
                    "max": data.mpTotal,
                },
                {
                    "label": "防護点",
                    "value": data.defenseTotalAllDef,
                    "max": data.defenseTotalAllDef,
                },
                {
                    "label": "移動力",
                    "value": data.mobilityTotal,
                    "max": data.mobilityTotal,
                },
                {
                    "label": "G",
                    "value": data.moneyTotal,
                },
                {
                    "label": "1ゾロ",
                    "value": 0,
                },
                {
                    "label": "命中修正",
                    "value": 0,
                    "max": 0,
                },
                {
                    "label": "回避修正",
                    "value": data.armourEva + data.shieldEva + data.defOtherEva,
                    "max": data.armourEva + data.shieldEva + data.defOtherEva,
                },
            ],
            "params": [
                // ボーナス
                {
                    "label": "器用度",
                    "value": data.bonusDex,
                },
                {
                    "label": "敏捷度",
                    "value": data.bonusAgi,
                },
                {
                    "label": "筋力",
                    "value": data.bonusStr,
                },
                {
                    "label": "生命力",
                    "value": data.bonusVit,
                },
                {
                    "label": "知力",
                    "value": data.bonusInt,
                },
                {
                    "label": "精神力",
                    "value": data.bonusMnd,
                },
            ],
            "active": true,
            "secret": false,
            "invisible": false,
            "hideStatus": false,
            "commands": document.querySelector("#text_chatPallet").value,
        }
    };

    // --------------------------------------------------
    // 技能レベルをセット
    // --------------------------------------------------

    // lvから始まるデータを取得
    const array = Object.keys(data)
        .map(
            k => ({
                key: k,
                value: data[k]
            })
        )
        .filter(
            target => target.key.indexOf("lv") === 0
        );

    array.forEach(target => {
        let skillName = "";
        switch (target.key) {
            case "lvFig" :
                skillName ="ファイター";
                break;
            case "lvGra" :
                skillName ="グラップラー";
                break;
            case "lvFen" :
                skillName ="フェンサー";
                break;
            case "lvSho" :
                skillName ="シューター";
                break;
            case "lvBat" :
                skillName ="バトルダンサー";
                break;
            case "lvSor" :
                skillName ="ソーサラー";
                break;
            case "lvCon" :
                skillName ="コンジャラー";
                break;
            case "lvPri" :
                skillName ="プリースト";
                break;
            case "lvFai" :
                skillName ="フェアリーテイマー";
                break;
            case "lvMag" :
                skillName ="マギテック";
                break;
            case "lvDru" :
                skillName ="ドルイド";
                break;
            case "lvDem" :
                skillName ="デーモンルーラー";
                break;
            case "lvSco" :
                skillName ="スカウト";
                break;
            case "lvRan" :
                skillName ="レンジャー";
                break;
            case "lvSag" :
                skillName ="セージ";
                break;
            case "lvEnh" :
                skillName ="エンハンサー";
                break;
            case "lvBar" :
                skillName ="バード";
                break;
            case "lvRid" :
                skillName ="ライダー";
                break;
            case "lvAlc" :
                skillName ="アルケミスト";
                break;
            case "lvGeo" :
                skillName ="ジオマンサー";
                break;
            case "lvWar" :
                skillName ="ウォーリーダー";
                break;
            case "lvDark" :
                skillName ="ダークハンター";
                break;
            case "lvPhy" :
                skillName ="フィジカルマスター";
                break;

            // 上記以外の場合スキップ
            default :
                return;
        }

        characterData["data"]["params"].push(
            {
                "label": skillName,
                "value": target.value,
            },
        );
    })

    // --------------------------------------------------
    // クリップボードにコピー
    // --------------------------------------------------

    await navigator.clipboard.writeText(JSON.stringify(characterData));

    // --------------------------------------------------
    // ナビテキストの表示
    // --------------------------------------------------

    showNaviText("navi_output");
}
