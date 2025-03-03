/**
 * 定数
 */

// 能力値ボーナス
const listStatus = {
    Dex: "器用度",
    Agi: "敏捷度",
    Str: "筋力",
    Vit: "生命力",
    Int: "知力",
    Mnd: "精神力",
}

// 技能レベル
const listSkill = {
    // ●冒険者レベル
    level: "冒険者レベル",

    // ●戦士系
    lvFig: "ファイター",
    lvFen: "フェンサー",
    lvGra: "グラップラー",
    lvSho: "シューター",
    lvBat: "バトルダンサー",

    // ●魔法使い系
    lvSor: "ソーサラー",
    lvCon: "コンジャラー",
    lvPri: "プリースト",
    lvMag: "マギテック",
    lvFai: "フェアリーテイマー",
    lvDem: "デーモンルーラー",
    lvDru: "ドルイド",
    lvAby: "アビスゲイザー",

    // ●その他系
    lvSco: "スカウト",
    lvRan: "レンジャー",
    lvSag: "セージ",
    lvEnh: "エンハンサー",
    lvBar: "バード",
    lvRid: "ライダー",
    lvAlc: "アルケミスト",
    lvGeo: "ジオマンサー",
    lvWar: "ウォーリーダー",
    lvDar: "ダークハンター",
    lvPhy: "フィジカルマスター",
};

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
                cond: {
                    name: "＜スカウト用ツール＞未所持",
                    targets: "items",
                    target: "スカウト用ツール",
                    bonus: -4,
                },
                skill: [
                    { id: "lvSco" },
                    {
                        id: "lvRan",
                        note: "自然物を利用した罠のみ"
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
                        note: "自然物を利用した罠のみ"
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
                        note: "自然環境のみ"
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
                        note: "自然環境のみ"
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
                        note: "自然環境のみ"
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
                        note: "自然環境のみ"
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
                        note: "自然物を利用した罠のみ"
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
// ファンクション
// ====================================================================================================

/**
 * コマデータ出力
 */
export async function outputCharacter() {
    // --------------------------------------------------
    // セッションストレージからデータを取得
    // --------------------------------------------------

    let data = JSON.parse(sessionStorage.getItem("data"));

    // --------------------------------------------------
    // データを生成
    // --------------------------------------------------

    // ステータス
    let listStatus = [];
    document.querySelectorAll(".card_status > .valueBlock").forEach(target => {
        // 名前を取得
        const name = target.querySelector('[id^="status_name_"]').value;
        if (!name) {
            return;
        }

        // ステータス（名称・値）
        const status = {
            "label": name,
            "value": target.querySelector('[id^="status_value_"]').value
        }

        // ステータス（最大値）
        const max = target.querySelector('[id^="status_max_"]').value;
        if (max) {
            status["max"] = max;
        }

        // ステータスを追加
        listStatus.push(status);
    });

    // 駒データ
    let characterData = {
        "kind": "character",
        "data": {
            "name": data.characterName,
            "memo": null,
            "externalUrl": getUrl(),
            "status": listStatus,
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
        // 技能名を取得
        let skillName = listSkill[target.key];
        if (skillName) {
            // パラメータを追加
            characterData["data"]["params"].push(
                {
                    "label": skillName,
                    "value": target.value,
                },
            );
        }
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

/**
 * 技能レベル：日本語名からkeyを取得
 */
export function getSkillLevelForName (name) {
    const listSkillR = Object.fromEntries(
        Object.entries(listSkill)
            .map(([key, value]) => [value, key])
    );

    return listSkillR[name];
}

/**
 * 回避力修正を取得
 */
export function getDodge (data) {
    // 回避力トータルを取得
    let value = data.defenseTotal1Eva;

    // 回避力0の場合、0を返す
    if (value <= 0) {
        return 0;
    }

    // 技能レベルを引く
    value -= data[getSkillLevelForName(data.evasionClass1)] ?? 0;

    // 敏捷度ボーナスを引く
    value -= data.bonusAgi;

    return value;
}

/**
 * 「戦闘用：攻撃」カテゴリーの生成
 */
 export function setAttack (data, list) {

    // 武器データを取得
    let listWeapon = [];
    for (let i = 1; i <= data.weaponNum; i++) {
        // 技能名称
        const className = data["weapon" + i + "Class"];

        // 技能が設定されていない場合は無視
        if (!className) {
            continue;
        }

        // 配列の生成
        listWeapon.push({
            name: data["weapon" + i + "Name"],
            skill: getSkillLevelForName(className),
            usage: data["weapon" + i + "Usage"],
            note: data["weapon" + i + "Note"],
            hit: {
                bonusId: "Dex",
                hitAdd : data["weapon" + i + "Acc"],
            },
            damage: {
                rate : data["weapon" + i + "Rate"],
                rateAdd : data["weapon" + i + "Dmg"],
                critical: data["weapon" + i + "Crit"],
                criticalAdd: (data["weapon" + i + "Class"] == "フェンサー") ? -1 : 0,
                bonusId: "Str",
            },
        });
    }

    // 「戦闘用：攻撃」に上記を追加
    const categoryAttack = list.find(item => item.name === "戦闘用：武器");
    categoryAttack.roll = listWeapon;
 }

/**
 * キャラクター名の描画
 */
export function drawCharacterName (data) {
    document.querySelector("#loadCharacter .name").textContent = data.characterName;
}

/**
 * ステータスの描画
 */
export function drawStatus (data, mode = 0) {
    // --------------------------------------------------
    // セッションストレージからデータを取得
    // --------------------------------------------------

    if (data == null) {
        data = JSON.parse(sessionStorage.getItem("data"));
    }

    // --------------------------------------------------
    // 各ステータスをクリア
    // --------------------------------------------------

    document.querySelectorAll('input[id^="status_"]').forEach(target => {
        target.value = "";
    });

    // --------------------------------------------------
    // 各ステータスを描画
    // --------------------------------------------------

    // ＨＰ
    document.getElementById("status_name_1").value = "HP";
    document.getElementById("status_value_1").value = data.hpTotal;
    document.getElementById("status_max_1").value = data.hpTotal;

    // ＭＰ
    document.getElementById("status_name_2").value = "MP";
    document.getElementById("status_value_2").value = data.mpTotal;
    document.getElementById("status_max_2").value = data.mpTotal;

    switch(mode) {
        // ●マギテック
        case 1:
            // 防護点
            document.getElementById("status_name_3").value = "防護点";
            document.getElementById("status_value_3").value = data.defenseTotal1Def;
            document.getElementById("status_max_3").value = data.defenseTotal1Def;

            // 移動力
            document.getElementById("status_name_4").value = "移動力";
            document.getElementById("status_value_4").value = data.mobilityTotal;
            document.getElementById("status_max_4").value = data.mobilityTotal;

            // 1ゾロ
            document.getElementById("status_name_5").value = "1ゾロ";
            document.getElementById("status_value_5").value = 0;

            // ガメル
            document.getElementById("status_name_6").value = "G";
            document.getElementById("status_value_6").value = data.moneyTotal;

            // 装填
            document.getElementById("status_name_7").value = "装填";
            document.getElementById("status_value_7").value = 0;

            // 命中力修正
            document.getElementById("status_name_9").value = "命中力修正";
            document.getElementById("status_value_9").value = 0;
            document.getElementById("status_max_9").value = 0;

            // 回避力修正
            document.getElementById("status_name_10").value = "回避力修正";
            document.getElementById("status_value_10").value = getDodge(data);
            document.getElementById("status_max_10").value = getDodge(data);

            // ダメージ修正
            document.getElementById("status_name_11").value = "ダメージ修正";
            document.getElementById("status_value_11").value = 0;
            document.getElementById("status_max_11").value = 0;

            break;

        // ●バード
        case 2:
            // 防護点
            document.getElementById("status_name_3").value = "防護点";
            document.getElementById("status_value_3").value = data.defenseTotal1Def;
            document.getElementById("status_max_3").value = data.defenseTotal1Def;

            // 楽素⤴
            document.getElementById("status_name_4").value = "楽素⤴";
            document.getElementById("status_value_4").value = 0;

            // 移動力
            document.getElementById("status_name_5").value = "移動力";
            document.getElementById("status_value_5").value = data.mobilityTotal;
            document.getElementById("status_max_5").value = data.mobilityTotal;

            // 楽素⤵
            document.getElementById("status_name_6").value = "楽素⤵";
            document.getElementById("status_value_6").value = 0;

            // 1ゾロ
            document.getElementById("status_name_7").value = "1ゾロ";
            document.getElementById("status_value_7").value = 0;

            // 楽素♡
            document.getElementById("status_name_8").value = "楽素♡";
            document.getElementById("status_value_8").value = 0;

            // ガメル
            document.getElementById("status_name_9").value = "G";
            document.getElementById("status_value_9").value = data.moneyTotal;

            // 命中力修正
            document.getElementById("status_name_10").value = "命中力修正";
            document.getElementById("status_value_10").value = 0;
            document.getElementById("status_max_10").value = 0;

            // 回避力修正
            document.getElementById("status_name_11").value = "回避力修正";
            document.getElementById("status_value_11").value = getDodge(data);
            document.getElementById("status_max_11").value = getDodge(data);

            // ダメージ修正
            document.getElementById("status_name_12").value = "ダメージ修正";
            document.getElementById("status_value_12").value = 0;
            document.getElementById("status_max_12").value = 0;

            break;

        // ●シンプル
        case 3:
            // 防護点
            document.getElementById("status_name_3").value = "防護点";
            document.getElementById("status_value_3").value = data.defenseTotal1Def;
            document.getElementById("status_max_3").value = data.defenseTotal1Def;

            // 移動力
            document.getElementById("status_name_4").value = "移動力";
            document.getElementById("status_value_4").value = data.mobilityTotal;
            document.getElementById("status_max_4").value = data.mobilityTotal;

            // 1ゾロ
            document.getElementById("status_name_9").value = "1ゾロ";
            document.getElementById("status_value_9").value = 0;

            // ガメル
            document.getElementById("status_name_10").value = "G";
            document.getElementById("status_value_10").value = data.moneyTotal;

            // 命中力修正
            document.getElementById("status_name_11").value = "命中力修正";
            document.getElementById("status_value_11").value = 0;
            document.getElementById("status_max_11").value = 0;

            // 回避力修正
            document.getElementById("status_name_12").value = "回避力修正";
            document.getElementById("status_value_12").value = getDodge(data);
            document.getElementById("status_max_12").value = getDodge(data);

            // ダメージ修正
            document.getElementById("status_name_13").value = "ダメージ修正";
            document.getElementById("status_value_13").value = 0;
            document.getElementById("status_max_13").value = 0;

            break;

        // ●スタンダード
        default:
            // 防護点
            document.getElementById("status_name_3").value = "防護点";
            document.getElementById("status_value_3").value = data.defenseTotal1Def;
            document.getElementById("status_max_3").value = data.defenseTotal1Def;

            // 移動力
            document.getElementById("status_name_4").value = "移動力";
            document.getElementById("status_value_4").value = data.mobilityTotal;
            document.getElementById("status_max_4").value = data.mobilityTotal;

            // 1ゾロ
            document.getElementById("status_name_5").value = "1ゾロ";
            document.getElementById("status_value_5").value = 0;

            // ガメル
            document.getElementById("status_name_6").value = "G";
            document.getElementById("status_value_6").value = data.moneyTotal;

            // 命中力修正
            document.getElementById("status_name_9").value = "命中力修正";
            document.getElementById("status_value_9").value = 0;
            document.getElementById("status_max_9").value = 0;

            // 回避力修正
            document.getElementById("status_name_10").value = "回避力修正";
            document.getElementById("status_value_10").value = getDodge(data);
            document.getElementById("status_max_10").value = getDodge(data);

            // ダメージ修正
            document.getElementById("status_name_11").value = "ダメージ修正";
            document.getElementById("status_value_11").value = 0;
            document.getElementById("status_max_11").value = 0;
    }
}

/**
 * カードの描画
 */
export function drawContents (data) {
    // テンプレートを読み込む
    const tempCategory = document.getElementById("temp_category");
    const tempRoll = document.getElementById("temp_roll");
    const tempWeapon = document.getElementById("temp_roll_weapon");
    const tempMagic = document.getElementById("temp_roll_magic");
    const tempSkill = document.getElementById("temp_skill");

    // 要素を削除
    document.getElementById("mainContents").innerHTML = "";

    // 行為判定リスト
    let listCard = [...listRoll];

    // 「戦闘用：攻撃」カテゴリーの生成
    setAttack(data, listCard);

    // ID
    let id = 1;

    // --------------------------------------------------
    // カテゴリー
    // --------------------------------------------------
    listCard.forEach(category => {
        // テンプレートをクローン
        const cloneCategory = tempCategory.content.cloneNode(true);

        // 名称
        cloneCategory.querySelector(".acordionTitleRow > h3").textContent = category.name;

        // タイプ＝武器
        const typeWeapon = (category.type === "weapon");

        // タイプ＝魔法
        const typeMagic = (category.type === "magic");

        // タイプ＝回避
        const typeDodge = (category.type === "dodge");

        // 開閉ボタン
        let categoryId = "area_category_" + id;
        cloneCategory.firstElementChild.id = categoryId;
        cloneCategory.querySelector(".acordionTitleRow > button").addEventListener(
            "click",
            () => {
                toggleAcordion(categoryId);
            }
        );

        // 有効な行為判定があるか
        let flagNoSkill = true;

        // --------------------------------------------------
        // 行為判定／ダメージ
        // --------------------------------------------------

        // 前の武器（両手持ち用）
        let prevWeapon;

        category.roll.forEach(roll => {
            let cloneRoll;

            // ●武器
            if (typeWeapon) {
                // テンプレートをクローン
                cloneRoll = tempWeapon.content.cloneNode(true);

                // カテゴリー
                // - チェックボックス
                cloneRoll.querySelector('input[type="checkbox"]').checked = true;
                // - 武器名称
                let dupFlag = false;
                let name = roll.name;
                if (!name) {
                    dupFlag = true;
                    name = prevWeapon.name + "(" + roll.usage + ")";
                }
                cloneRoll.querySelector(".weaponName").textContent = name;
                // - 備考
                let note = roll.note;
                if (note) {
                    cloneRoll.querySelector(".weaponNote").textContent = note;
                } else {
                    cloneRoll.querySelector(".weaponNote").remove();
                }
                // - 技能：名称
                cloneRoll.querySelector(".valueBlock.level  > .name").textContent = listSkill[roll.skill];
                // - 技能：レベル
                cloneRoll.querySelector(".valueBlock.level > .value").textContent = data[roll.skill];

                // 命中力
                // - 能力値ボーナス：背景色
                cloneRoll.querySelector(".card_skill.hit .valueBlock.bonus").classList.add(roll.hit.bonusId);
                // - 能力値ボーナス：名称
                cloneRoll.querySelector(".card_skill.hit .valueBlock.bonus > .name").textContent = listStatus[roll.hit.bonusId];
                // - 能力値ボーナス：値
                cloneRoll.querySelector(".card_skill.hit .valueBlock.bonus > .value").textContent = data["bonus" + roll.hit.bonusId];
                // - 能力値ボーナス：ボーナス修正
                let addHit = data["bonus" + roll.hit.hitAdd];
                if (addHit != 0) {
                    if (addHit > 0) {
                        addHit = "+" + addHit;
                    }
                    cloneRoll.querySelector(".card_skill.hit .valueBlock.bonus > .add").textContent = addHit;
                }

                // ダメージ
                // - 威力
                cloneRoll.querySelector(".card_skill.damage .valueBlock.rate > .value").textContent = roll.damage.rate;
                let addRate = roll.damage.rateAdd;
                if (addRate != 0) {
                    if (addRate > 0) {
                        addRate = "+" + addRate;
                    }

                    cloneRoll.querySelector(".card_skill.damage .valueBlock.rate > .add").textContent = addRate;
                }
                // - Ｃ値
                cloneRoll.querySelector(".card_skill.damage .valueBlock.critical > .value").textContent = roll.damage.critical;
                let addCritical = roll.damage.criticalAdd;
                if (addCritical != 0) {
                    if (addCritical > 0) {
                        addCritical = "+" + addCritical;
                    }
                    cloneRoll.querySelector(".card_skill.damage .valueBlock.critical > .add").textContent = addCritical;
                }
                // - 能力値ボーナス：背景色
                cloneRoll.querySelector(".card_skill.damage .valueBlock.bonus").classList.add(roll.damage.bonusId);
                // - 能力値ボーナス：名称
                cloneRoll.querySelector(".card_skill.damage .valueBlock.bonus > .name").textContent = listStatus[roll.damage.bonusId];
                // - 能力値ボーナス：値
                cloneRoll.querySelector(".card_skill.damage .valueBlock.bonus > .value").textContent = data["bonus" + roll.damage.bonusId];

                // 前の武器として保持する
                if (!dupFlag) {
                    prevWeapon = roll;
                }

                // 有効な行為判定がある
                flagNoSkill = false;
            }
            // ●魔法
            else if (typeMagic) {
                // テンプレートをクローン
                cloneRoll = tempMagic.content.cloneNode(true);

                // 威力
                cloneRoll.querySelector(".valueBlock.rate > .value").textContent = roll.rate;

                // Ｃ値
                cloneRoll.querySelector(".valueBlock.critical > .value").textContent = roll.critical;

                // 能力値ボーナス：背景色
                cloneRoll.querySelector(".valueBlock.bonus").classList.add(roll.bonusId);

                // 能力値ボーナス：名称
                cloneRoll.querySelector(".valueBlock.bonus > .name").textContent = listStatus[roll.bonusId];

                // 能力値ボーナス：値
                cloneRoll.querySelector(".valueBlock.bonus > .value").textContent = data["bonus" + roll.bonusId];
            }
            // ●行為判定
            else {
                // テンプレートをクローン
                cloneRoll = tempRoll.content.cloneNode(true);

                // ブック
                if (roll.book) {
                    cloneRoll.querySelector(".book").textContent = roll.book;
                } else {
                    // ブック表示欄を削除
                    cloneRoll.querySelector(".book").remove();
                }

                // 名称
                cloneRoll.querySelector(".rollName").textContent = roll.name;

                // 能力値ボーナス：背景色
                cloneRoll.querySelector(".valueBlock.bonus").classList.add(roll.bonusId);

                // 能力値ボーナス：名称
                cloneRoll.querySelector(".valueBlock.bonus > .name").textContent = listStatus[roll.bonusId];

                // 能力値ボーナス：値
                cloneRoll.querySelector(".valueBlock.bonus > .value").textContent = data["bonus" + roll.bonusId];

                // // 回避
                if (typeDodge) {
                    // 判定用classを不可
                    cloneRoll.firstElementChild.classList.add("dodge");
                }

                // ●条件なし
                const addCondValue = cloneRoll.querySelector(".valueBlock.add");
                if (
                    typeof roll.cond === "undefined"
                    || (
                        data[roll.cond.targets]
                        && data[roll.cond.targets].indexOf(roll.cond.target) > -1
                    )
                ) {
                    addCondValue.remove();
                }
                // ●条件あり
                else {
                    if (roll.cond.bonus < 0) {
                        addCondValue.classList.add("minus");
                    }
                    else if (roll.cond.bonus > 0) {
                        addCondValue.classList.add("plus");
                    }
                    addCondValue.querySelector(".name").textContent = roll.cond.name;
                    addCondValue.querySelector(".value").textContent = roll.cond.bonus;
                }
            }

            // --------------------------------------------------
            // 技能レベル
            // --------------------------------------------------

            // タイプ＝武器以外
            if (!typeWeapon) {
                // 使用可能技能数
                let usableSkill = 0;

                // 対象技能
                let targets = roll.skill;
                if (!targets) {
                    // 空の場合、全技能を対象
                    targets = [];
                    Object.keys(listSkill)
                        .filter(key => key != "level") // 「冒険者レベル」は除く
                        .forEach(key => {
                            targets.push({
                                id: key
                            });
                        });
                }

                // 対象技能分ループ
                targets.forEach(skill => {
                    // テンプレートをクローン
                    const cloneSkill = tempSkill.content.cloneNode(true);

                    // 名称
                    cloneSkill.querySelector(".skillName > .name").textContent = listSkill[skill.id];

                    // レベル
                    cloneSkill.querySelector(".valueBlock.level > .value").textContent = (data[skill.id] ?? 0);

                    // 注釈
                    let flagUsable = true;
                    if (skill.note) {
                        // 要素を生成
                        const condition = document.createElement("div");
                        condition.classList.add("condition");
                        condition.textContent = skill.note;

                        // 条件チェック
                        const cond = skill.cond
                        if (cond) {
                            // 条件用ＣＳＳ
                            condition.classList.add("alert");

                            // 条件を満たさない場合、グレーアウト
                            if (!checkLearn(data, cond.category, cond.target)) {
                                cloneSkill.firstElementChild.classList.add("skillDisabled");

                                flagUsable = false;
                            }
                        }

                        // 要素を追加
                        cloneSkill.querySelector('.card_skill').appendChild(condition);
                    }

                    // - 技能なし
                    const checkbox = cloneSkill.querySelector('input[type="checkbox"]');
                    if (!data[skill.id] || !flagUsable) {
                        // チェックＯＦＦ
                        checkbox.checked = false;

                        // グレーアウト
                        cloneSkill.firstElementChild.classList.add("skillDisabled");
                    }
                    // - 技能あり
                    else {
                        // チェックＯＮ
                        checkbox.checked = true;

                        // 使用可能技能数
                        usableSkill++;
                    }

                    // 要素を追加
                    cloneRoll.querySelector(".skills").appendChild(cloneSkill);
                });

                // 使用可能な技能が無い場合、「平目」を追加
                if (usableSkill == 0) {
                    if (!typeMagic) {
                        const cloneSkill = tempSkill.content.cloneNode(true);

                        // 名称
                        cloneSkill.querySelector(".skillName > .name").textContent = "平目";

                        // レベル
                        cloneSkill.querySelector(".valueBlock.level > .value").textContent = 0;

                        // チェックＯＮ
                        cloneSkill.querySelector('input[type="checkbox"]').checked = true;

                        // 要素を追加
                        cloneRoll.querySelector(".skills").prepend(cloneSkill);

                        // 有効な行為判定があるＯＦＦ
                        flagNoSkill = false;
                    }

                    // 親要素（行為判定）の能力値ボーナスをグレーアウト
                    cloneRoll.querySelector(".valueBlock.bonus").classList.add("flat");
                }
                // ●それ以外の場合
                else {
                    // 有効な行為判定があるＯＦＦ
                    flagNoSkill = false;
                }
            }

            // --------------------------------------------------

            // 要素を追加
            cloneCategory.querySelector(".contents").appendChild(cloneRoll);
        });

        // --------------------------------------------------

        // チェックボックス状態
        cloneCategory.querySelector(".categoryCheck").checked = !flagNoSkill;

        // 要素を追加
        document.getElementById("mainContents").appendChild(cloneCategory);

        // IDをインクリメント
        id++;
    });
}

/**
 * 習得チェック
 */
export function checkLearn (data, skillCategory, targetName) {
    // skillCategoryに前方一致するデータを抽出
    const array = Object.keys(data)
        .map(
            k => ({
                key: k,
                value: data[k]
            })
        )
        .filter(
            target => target.key.indexOf(skillCategory) === 0
        );

    // 指定した戦闘特技を習得しているか
    return array.some(target => target.value == targetName);
}
