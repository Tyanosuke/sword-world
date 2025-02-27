/**
 * 初期化
 */
window.onload = function() {
    // サイト選択
    selectSite();
}

/**
 * 定数
 */

// 行為判定
const listRoll = [
    // --------------------------------------------------
    {
        name: "非戦闘用",
        roll: [
            // 器用度
            {
                name: "隠蔽",
                bonusId: "Dex",
                skill: [
                    { id:"lvSco" },
                    { id:"lvRan" },
                ]
            },
            {
                name: "応急手当",
                bonusId: "Dex",
                skill: [
                    { id: "lvRan" },
                ]
            },
            {
                name: "解除",
                bonusId: "Dex",
                skill: [
                    { id: "lvSco" },
                    {
                        id: "lvRan",
                        limit: "自然物を利用した罠のみ"
                    },
                ]
            },
            {
                name: "スリ",
                bonusId: "Dex",
                skill: [
                    { id: "lvSco" },
                ]
            },
            {
                name: "変装",
                bonusId: "Dex",
                skill: [
                    { id: "lvSco" },
                ]
            },
            {
                name: "罠設置",
                bonusId: "Dex",
                skill: [
                    { id: "lvSco" },
                    {
                        id: "lvRan",
                        limit: "自然物を利用した罠のみ"
                    },
                ]
            },
            // 敏捷度
            {
                name: "受け身",
                bonusId: "Agi",
                skill: [
                    { id: "lvSco" },
                    { id: "lvRan" },
                    { id: "lvRid" },
                ]
            },
            {
                name: "隠密",
                bonusId: "Agi",
                skill: [
                    { id: "lvSco" },
                    { id: "lvRan" },
                ]
            },
            {
                name: "軽業",
                bonusId: "Agi",
                skill: [
                    { id: "lvSco" },
                    { id: "lvRan" },
                ]
            },
            {
                name: "登攀",
                bonusId: "Agi",
                skill: [
                    { id: "lvSco" },
                    { id: "lvRan" },
                ]
            },
            {
                name: "尾行",
                bonusId: "Agi",
                skill: [
                    { id: "lvSco" },
                    { id: "lvRan" },
                ]
            },
            {
                book: "Ⅲ",
                name: "騎乗",
                bonusId: "Agi",
                skill: [
                    { id: "lvRid" },
                ]
            },
            // 知力
            {
                name: "足跡追跡",
                bonusId: "Int",
                skill: [
                    { id: "lvSco" },
                    { id: "lvRan" },
                    {
                        id: "lvRid",
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "craftRiding",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                name: "異常感知",
                bonusId: "Int",
                skill: [
                    { id: "lvSco" },
                    {
                        id: "lvRan",
                        limit: "自然環境のみ"
                    },
                    {
                        id: "lvRid",
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "craftRiding",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                name: "聞き耳",
                bonusId: "Int",
                skill: [
                    { id: "lvSco" },
                    { id: "lvRan" },
                ]
            },
            {
                name: "危険感知",
                bonusId: "Int",
                skill: [
                    { id: "lvSco" },
                    { id: "lvRan" },
                    {
                        id: "lvRid",
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "craftRiding",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                name: "見識",
                bonusId: "Int",
                skill: [
                    { id: "lvSag" },
                    { id: "lvBar" },
                    { id: "lvAlc" },
                ]
            },
            {
                name: "探索",
                bonusId: "Int",
                skill: [
                    { id: "lvSco" },
                    {
                        id: "lvRan",
                        limit: "自然環境のみ"
                    },
                    {
                        id: "lvRid",
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "craftRiding",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                name: "地図作成",
                bonusId: "Int",
                skill: [
                    { id: "lvSco" },
                    {
                        id: "lvRan",
                        limit: "自然環境のみ"
                    },
                    { id: "lvSag" },
                    { id: "lvRid" },
                ]
            },
            {
                name: "天候予測",
                bonusId: "Int",
                skill: [
                    { id: "lvSco" },
                    { id: "lvRan" },
                ]
            },
            {
                name: "病気知識",
                bonusId: "Int",
                skill: [
                    {
                        id: "lvRan",
                        limit: "自然環境のみ"
                    },
                    { id: "lvSag" },
                ]
            },
            {
                name: "文献",
                bonusId: "Int",
                skill: [
                    { id: "lvSag" },
                ]
            },
            {
                name: "文明鑑定",
                bonusId: "Int",
                skill: [
                    { id: "lvSag" },
                ]
            },
            {
                name: "宝物鑑定",
                bonusId: "Int",
                skill: [
                    { id: "lvSco" },
                    { id: "lvSag" },
                ]
            },
            {
                name: "魔法行使",
                bonusId: "Int",
                skill: [
                    { id: "lvSor" },
                    { id: "lvCon" },
                    { id: "lvPri" },
                    { id: "lvMag" },
                    { id: "lvFai" },
                ]
            },
            {
                name: "薬品学",
                bonusId: "Int",
                skill: [
                    { id: "lvRan" },
                    { id: "lvSag" },
                    { id: "lvAlc" },
                ]
            },
            {
                name: "罠回避",
                bonusId: "Int",
                skill: [
                    { id: "lvSco" },
                    {
                        id: "lvRan",
                        limit: "自然物を利用した罠のみ"
                    },
                    {
                        id: "lvRid",
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "craftRiding",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                book: "Ⅱ",
                name: "聞き込み",
                bonusId: "Int",
            },
            {
                book: "Ⅲ",
                name: "弱点隠蔽",
                bonusId: "Int",
                skill: [
                    { id: "lvRid" },
                ]
            },
            {
                book: "Ⅲ",
                name: "賦術",
                bonusId: "Int",
                skill: [
                    { id: "lvAlc" },
                ]
            },
            {
                book: "Ⅱ",
                name: "演奏",
                bonusId: "Mnd",
                skill: [
                    { id: "lvBar" },
                ]
            },
        ]
    },
    // --------------------------------------------------
    {
        name: "冒険者判定",
        roll: [
            {
                name: "跳躍",
                bonusId: "Agi",
                skill: [
                    { id: "level" },
                ]
            },
            {
                book: "Ⅱ",
                name: "水泳",
                bonusId: "Agi",
                skill: [
                    { id: "level" },
                ]
            },
            {
                name: "登攀",
                bonusId: "Str",
                skill: [
                    { id: "level" },
                ]
            },
            {
                name: "腕力",
                bonusId: "Str",
                skill: [
                    { id: "level" },
                ]
            },
            {
                name: "生死",
                bonusId: "Vit",
                skill: [
                    { id: "level" },
                ]
            },
            {
                name: "真偽",
                bonusId: "Int",
                skill: [
                    { id: "level" },
                ]
            },
        ]
    },
    // --------------------------------------------------
    {
        name: "戦闘用：開始時",
        roll: [
            {
                name: "魔物知識",
                bonusId: "Int",
                skill: [
                    { id: "lvSag" },
                    {
                        id: "lvRid",
                        note: "弱点獲得に条件あり(Ⅲ-P.84)"
                    },
                ]
            },
            {
                name: "先制",
                bonusId: "Agi",
                skill: [
                    { id: "lvSco" },
                ]
            },
        ]
    },
    // --------------------------------------------------
    {
        name: "戦闘用：武器",
        type: "weapon",
        roll: []
    },
    // --------------------------------------------------
    {
        name: "戦闘用：魔法",
        type: "magic",
        roll: [
            {
                rate : 0,
                critical: 10,
                bonusId: "Int",
                skill: [
                    { id: "lvSor" },
                    { id: "lvCon" },
                    { id: "lvPri" },
                    { id: "lvMag" },
                    { id: "lvFai" },
                ]
            },
            {
                rate : 10,
                critical: 10,
                bonusId: "Int",
                skill: [
                    { id: "lvSor" },
                    { id: "lvCon" },
                    { id: "lvPri" },
                    { id: "lvMag" },
                    { id: "lvFai" },
                ]
            },
            {
                rate : 20,
                critical: 10,
                bonusId: "Int",
                skill: [
                    { id: "lvSor" },
                    { id: "lvCon" },
                    { id: "lvPri" },
                    { id: "lvMag" },
                    { id: "lvFai" },
                ]
            },
            {
                rate : 30,
                critical: 10,
                bonusId: "Int",
                skill: [
                    { id: "lvSor" },
                    { id: "lvCon" },
                    { id: "lvPri" },
                    { id: "lvMag" },
                    { id: "lvFai" },
                ]
            },
        ]
    },
    // --------------------------------------------------
    {
        name: "戦闘用：回避",
        type: "dodge",
        roll: [
            {
                name: "回避",
                bonusId: "Agi",
                skill: [
                    { id: "lvFig" },
                    { id: "lvFen" },
                    { id: "lvGra" },
                    {
                        id: "lvSho",
                        note: "《射手の体術》(Ⅱ-P.227)が必要",
                        cond: {
                            category: "combatFeatsLv",
                            target: "射手の体術"
                        }
                    },
                ]
            },
        ]
    },
    // --------------------------------------------------
    {
        name: "戦闘用：抵抗力",
        roll: [
            {
                name: "生命抵抗力",
                bonusId: "Vit",
                skill: [
                    { id: "level" },
                ]
            },
            {
                name: "精神抵抗力",
                bonusId: "Mnd",
                skill: [
                    { id: "level" },
                ]
            },
        ]
    },
    // --------------------------------------------------
];

// ====================================================================================================
// イベント
// ====================================================================================================

/**
 * 「サイト」リストボックス
 */
function selectSite($this = null) {
    // --------------------------------------------------
    // 見た目切り替え
    // --------------------------------------------------

    if ($this == null) {
        $this = document.getElementById("select_site");
    }

    let prefix = "";
    let suffix = "";
    let script = "";
    switch($this.selectedOptions[0].id){
        // ●ゆとシート
        case "ytsheet":
            prefix = "https://yutorize.2-d.jp/ytsheet/sw2.5/?id=";
            suffix = "&mode=json";
            script = "script_yutosheet";
            break;
        // // ●キャラクター保管所
        // case "vampire-blood":
        //     prefix = "https://charasheet.vampire-blood.net/";
        //     suffix = ".js";
        //     script= "script_vampire";
        //     break;
    }

    // 入力欄に反映
    document.getElementById("urlPrefix").textContent = prefix;
    document.getElementById("urlSuffix").textContent = suffix;

    // --------------------------------------------------
    // スクリプト切り替え
    // --------------------------------------------------

    // すでにスクリプトがある場合は削除
    if (window.siteScript) {
        document.body.removeChild(window.siteScript);
    }

    // 読み込み
    const elemScript = document.createElement("script");
    elemScript.src = script + ".js";
    document.body.appendChild(elemScript);
}

/**
 * 「開閉」ボタン
 */
function toggleAcordion(targerId) {
    document.getElementById(targerId).classList.toggle("close");
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

    // 読み込み先ＵＲＬ
    const url = getUrl(true);

    // 読み込み処理
    fetch(url, { method: 'GET' })
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

        // キャラクター名の描画
        drawCharacterName(data);

        // ステータスの描画
        drawStatus(data);

        // カードの描画
        drawContents(data);

        // 出力エリアを表示
        document.querySelector(".output_area").classList.remove("hidden");

        // チャットパレットの生成
        outputChatPallet(false);
    })
    .catch(error => {
        console.dir(error);

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
 * チャットパレット出力
 */
function outputChatPallet(navi = true) {
    // 出力文字列
    let text = "";

    // --------------------------------------------------
    // カテゴリー
    // --------------------------------------------------
    document.querySelectorAll('[id^="area_category_"]').forEach(category => {
        text += "─── " + category.querySelector('.acordionTitleRow > h3').textContent + " ───";
        text += "\r";

        // --------------------------------------------------
        // 行為判定
        // --------------------------------------------------
        category.querySelectorAll(".area_roll").forEach(roll => {
            // タイプ＝武器
            const typeWeapon = roll.classList.contains("weapon");

            // タイプ＝魔法
            const typeMagic = roll.classList.contains("magic");

            // タイプ回避
            const typeDodge = roll.classList.contains("dodge");

            // ●武器
            if (typeWeapon) {
                // チェックボックス
                if (roll.querySelector('input[type="checkbox"]').checked == false) {
                    // チェックOFFの場合、無視
                    return;
                }

                // 武器
                // - 名称
                const weaponName = roll.querySelector(".weaponName").textContent;
                // - 技能：名称
                const nameSkill = roll.querySelector(".valueBlock.level  > .name").textContent;

                // 命中力
                // - 能力値ボーナス：名称
                const nameBonusHit = roll.querySelector(".card_skill.hit .valueBlock.bonus > .name").textContent;
                // - 能力値ボーナス：ボーナス修正
                const addValue = roll.querySelector(".card_skill.hit .valueBlock.bonus > .add").textContent;

                // ダメージ
                // - 威力
                const valueRate = roll.querySelector(".card_skill.damage .valueBlock.rate > .value").textContent;
                const valueRateAdd = roll.querySelector(".card_skill.damage .valueBlock.rate > .add").textContent;
                // - Ｃ値
                const valueCritical = roll.querySelector(".card_skill.damage .valueBlock.critical > .value").textContent;
                // - 能力値ボーナス：名称
                const nameBonusDamage = roll.querySelector(".card_skill.damage .valueBlock.bonus > .name").textContent;

                // チャットコマンドを生成
                // - 命中力
                text +=
                    "2d6+{" + nameSkill + "}+{" + nameBonusHit + "}" + addValue
                    + "　■" + weaponName + "／命中力(" + nameSkill + "+" + nameBonusHit + ")\r";
                // - ダメージ
                text +=
                    "k" + valueRate +"@" + valueCritical + "+{" + nameSkill + "}+{" + nameBonusDamage + "}" + valueRateAdd
                    + "　■" + weaponName + "／威力:" + valueRate + "/C値:" + valueCritical + "(" + nameSkill + "+" + nameBonusDamage + ")\r";
            }
            // ●魔法
            else if (typeMagic) {
                // 威力
                const valueRate = roll.querySelector('.valueBlock.rate > .value').textContent;

                // Ｃ値
                const valueCritical = roll.querySelector('.valueBlock.critical > .value').textContent;

                // --------------------------------------------------
                // ダメージ
                // --------------------------------------------------
                roll.querySelectorAll(".card_skill").forEach(skill => {
                    // チェックボックス
                    if (skill.querySelector('input[type="checkbox"]').checked == false) {
                        // チェックOFFの場合、無視
                        return;
                    }

                    // 技能
                    const nameSkill = skill.querySelector(".skillName > .name").textContent;

                    // 能力値ボーナス
                    const nameBonus = roll.querySelector('.valueBlock.bonus > .name').textContent;

                    // チャットコマンドを生成
                    text +=
                        "k" + valueRate +"@" + valueCritical + "+{" + nameSkill + "}+{" + nameBonus + "}"
                        + "　■威力:" + valueRate + "/C値:" + valueCritical + "(" + nameSkill + "+" + nameBonus + ")\r";
                });
            }
            // ●行為判定
            else {
                // 行為判定
                const nameRoll = roll.querySelector(".rollName").textContent;

                // 能力値ボーナス
                const nameBonus = roll.querySelector('.valueBlock.bonus > .name').textContent;

                // 平目
                const flagFlat = roll.querySelector('.valueBlock.flat');

                // ●通常
                if (!flagFlat) {
                    // --------------------------------------------------
                    // 技能レベル
                    // --------------------------------------------------
                    roll.querySelectorAll(".card_skill").forEach(skill => {
                        // チェックボックス
                        if (skill.querySelector('input[type="checkbox"]').checked == false) {
                            // チェックＯＦＦの場合、無視
                            return;
                        }

                        // 技能
                        const nameSkill = skill.querySelector(".skillName > .name").textContent;

                        // 回避
                        let addValue = "";
                        if (typeDodge) {
                            addValue = "+{回避力修正}";
                        }

                        // チャットコマンドを生成
                        text +=
                            "2d6+{" + nameSkill + "}+{" + nameBonus + "}" + addValue
                            + "　■" + nameRoll + "(" + nameSkill + "+" + nameBonus + ")\r";
                    });
                }
                // ●平目
                else {
                    // チャットコマンドを生成
                    text += "2d6　■" + nameRoll + "(平目)\r";
                }
            }
        });
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
 * ＵＲＬを取得
 */
function getUrl (json = false) {
    let url = document.getElementById('urlPrefix').textContent + document.getElementById('input_url').value;

    if (json) {
        url += document.getElementById("urlSuffix").textContent;
    }

    return url;
}

/**
 * ナビテキストの表示
 */
async function showNaviText (targetId) {
    const naviText = document.getElementById(targetId);
    naviText.classList.add("show");
    window.setTimeout(() => {
        naviText.classList.remove("show");
    }, 1000);
}
