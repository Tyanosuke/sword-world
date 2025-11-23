// ====================================================================================================
// 定数・変数
// ====================================================================================================

/**
 * 能力値ボーナス
 */
const listStatus = {
    Dex: "器用度",
    Agi: "敏捷度",
    Str: "筋力",
    Vit: "生命力",
    Int: "知力",
    Mnd: "精神力",
}

/**
 * 技能レベル
 */
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

    // TODO: 何系？
    lvPhy: "フィジカルマスター",
};

/**
 * 行為判定
 */
const listRoll = [
    // --------------------------------------------------
    // 非戦闘用
    // --------------------------------------------------
    {
        name: "非戦闘用",
        roll: [
            // 器用度
            {
                name: "隠蔽",
                bonusId: "Dex",
                skill: [
                    { id: "lvSco" },
                    { id: "lvRan" },
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
                    name: "ツール未所持",
                    targets: "items",
                    target: ["スカウト用ツール", "精密ツールセット"],
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
                    {
                        id: "lvRid",
                        book: "Ⅲ",
                    },
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
                    {
                        id: "lvRid",
                        book: "Ⅲ",
                    },
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
                    {
                        id: "lvAlc",
                        book: "Ⅲ",
                    },
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
                    {
                        id: "lvRid",
                        book: "Ⅲ",
                    },
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
                    {
                        id: "lvFai",
                        book: "Ⅱ",
                    },
                    {
                        id: "lvDru",
                        book: "ML",
                    },
                    {
                        id: "lvDem",
                        book: "ML",
                    },
                ]
            },
            {
                name: "薬品学",
                bonusId: "Int",
                skill: [
                    { id: "lvRan" },
                    { id: "lvSag" },
                    {
                        id: "lvAlc",
                        book: "Ⅲ",
                    },
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
                skill: [
                    { id: "lvFig" },
                    { id: "lvFen" },
                    { id: "lvGra" },
                    { id: "lvSho" },
                    {
                        id: "lvBat",
                        book: "BM",
                    },

                    { id: "lvSor" },
                    { id: "lvCon" },
                    { id: "lvPri" },
                    { id: "lvMag" },
                    {
                        id: "lvFai",
                        book: "Ⅱ",
                    },
                    {
                        id: "lvDru",
                        book: "ML",
                    },
                    {
                        id: "lvDem",
                        book: "ML",
                    },
                    // { id: "lvAby" },

                    { id: "lvSco" },
                    { id: "lvRan" },
                    { id: "lvSag" },
                    {
                        id: "lvEnh",
                        book: "Ⅱ",
                    },
                    {
                        id: "lvBar",
                        book: "Ⅱ",
                    },
                    {
                        id: "lvRid",
                        book: "Ⅲ",
                    },
                    {
                        id: "lvAlc",
                        book: "Ⅲ",
                    },
                    // { id: "lvGeo" },
                    // { id: "lvWar" },
                    // { id: "lvDar" },
                    // { id: "lvPhy" },
                ]
            },
            {
                book: "Ⅲ",
                name: "弱点隠蔽",
                bonusId: "Int",
                skill: [
                    {
                        id: "lvRid",
                        book: "Ⅲ",
                    },
                ]
            },
            {
                book: "Ⅲ",
                name: "賦術",
                bonusId: "Int",
                skill: [
                    {
                        id: "lvAlc",
                        book: "Ⅲ",
                    },
                ]
            },
            {
                book: "ML",
                name: "送還",
                bonusId: "Int",
                skill: [
                    {
                        id: "lvDem",
                        book: "ML",
                    },
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
    // 判定パッケージ
    // --------------------------------------------------
    {
        name: "判定パッケージ",
        roll: [
            {
                name: "スカウト技巧",
                bonusId: "Dex",
                skill: [
                    { id: "lvSco" },
                ]
            },
            {
                name: "レンジャー技巧",
                bonusId: "Dex",
                skill: [
                    { id: "lvRan" },
                ]
            },
            {
                name: "スカウト運動",
                bonusId: "Agi",
                skill: [
                    { id: "lvSco" },
                ]
            },
            {
                name: "レンジャー運動",
                bonusId: "Agi",
                skill: [
                    { id: "lvRan" },
                ]
            },
            {
                name: "ライダー運動",
                bonusId: "Agi",
                skill: [
                    {
                        id: "lvRid",
                        book: "Ⅲ",
                    },
                ]
            },
            {
                name: "スカウト観察",
                bonusId: "Int",
                skill: [
                    { id: "lvSco" },
                ]
            },
            {
                name: "レンジャー観察",
                bonusId: "Int",
                skill: [
                    { id: "lvRan" },
                ]
            },
            {
                name: "ライダー観察",
                bonusId: "Int",
                skill: [
                    {
                        id: "lvRid",
                        book: "Ⅲ",
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "craftRiding",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                name: "セージ知識",
                bonusId: "Int",
                skill: [
                    { id: "lvSag" },
                ]
            },
            {
                name: "ライダー知識",
                bonusId: "Int",
                skill: [
                    {
                        id: "lvRid",
                        book: "Ⅲ",
                    },
                ]
            },
            {
                name: "アルケミスト知識",
                bonusId: "Int",
                skill: [
                    {
                        id: "lvAlc",
                        book: "Ⅲ",
                    },
                ]
            },
        ]
    },
    // --------------------------------------------------
    // 冒険者判定
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
    // 戦闘用：開始時
    // --------------------------------------------------
    {
        name: "戦闘用：開始時",
        roll: [
            {
                name: "魔物知識",
                bonusId: "Int",
                flatNote: "弱点看破不能",
                skill: [
                    { id: "lvSag" },
                    {
                        id: "lvRid",
                        note: "弱点看破不能",
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
    // 戦闘用：武器
    // --------------------------------------------------
    {
        name: "戦闘用：武器",
        type: "weapon",
        roll: []
    },
    // --------------------------------------------------
    // 戦闘用：魔法
    // --------------------------------------------------
    {
        name: "戦闘用：魔法",
        type: "magic",
        roll: [
            {
                name: "プリセット１",
                rate: 0,
                critical: 10,
                bonusId: "Int",
                skill: [
                    { id: "lvSor" },
                    { id: "lvCon" },
                    { id: "lvPri" },
                    { id: "lvMag" },
                    {
                        id: "lvFai",
                        book: "Ⅱ",
                    },
                    {
                        id: "lvDru",
                        book: "ML",
                    },
                    {
                        id: "lvDem",
                        book: "ML",
                    },
                ]
            },
            {
                name: "プリセット２",
                rate: 10,
                critical: 10,
                bonusId: "Int",
                skill: [
                    { id: "lvSor" },
                    { id: "lvCon" },
                    { id: "lvPri" },
                    { id: "lvMag" },
                    {
                        id: "lvFai",
                        book: "Ⅱ",
                    },
                    {
                        id: "lvDru",
                        book: "ML",
                    },
                    {
                        id: "lvDem",
                        book: "ML",
                    },
                ]
            },
            {
                name: "プリセット３",
                rate: 20,
                critical: 10,
                bonusId: "Int",
                skill: [
                    { id: "lvSor" },
                    { id: "lvCon" },
                    { id: "lvPri" },
                    { id: "lvMag" },
                    {
                        id: "lvFai",
                        book: "Ⅱ",
                    },
                    {
                        id: "lvDru",
                        book: "ML",
                    },
                    {
                        id: "lvDem",
                        book: "ML",
                    },
                ]
            },
            {
                name: "プリセット４",
                rate: 30,
                critical: 10,
                bonusId: "Int",
                skill: [
                    { id: "lvSor" },
                    { id: "lvCon" },
                    { id: "lvPri" },
                    { id: "lvMag" },
                    {
                        id: "lvFai",
                        book: "Ⅱ",
                    },
                    {
                        id: "lvDru",
                        book: "ML",
                    },
                    {
                        id: "lvDem",
                        book: "ML",
                    },
                ]
            },
        ]
    },
    // --------------------------------------------------
    // 戦闘用：回避
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
                    {
                        id: "lvBat",
                        book: "BM",
                    },
                ]
            },
        ]
    },
    // --------------------------------------------------
    // 戦闘用：抵抗力
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
        const name = target.querySelector('.status_name').value;
        if (!name) {
            return;
        }

        // ステータス（名称・値）
        const status = {
            "label": name,
            "value": target.querySelector('.status_value').value
        }

        // ステータス（最大値）
        const max = target.querySelector('.status_max').value;
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
                // 冒険者レベル
                {
                    "label": "冒険者レベル",
                    "value": data.level,
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
 * @param {String} name 日本語名
 * @returns 技能レベルのkey
 */
function getSkillLevelForName(name) {
    const listSkillR = Object.fromEntries(
        Object.entries(listSkill)
            .map(([key, value]) => [value, key])
    );

    return listSkillR[name];
}

/**
 * 回避力修正を取得
 * @param {Object} data キャラクターシートデータ
 * @returns 回避力修正
 */
function getDodge(data) {
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
 * @param {Object} data キャラクターシートデータ
 * @param {Object} list 行為判定リスト
 */
function setAttack(data, list) {

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
                bonusId: "Dex", // 器用度
                hitAdd: data["weapon" + i + "Acc"],
            },
            damage: {
                rate: data["weapon" + i + "Rate"],
                rateAdd: data["weapon" + i + "Dmg"],
                critical: data["weapon" + i + "Crit"],
                criticalAdd: (data["weapon" + i + "Class"] == "フェンサー") ? -1 : 0,
                bonusId: "Str", // 筋力
            },
        });
    }

    // 「戦闘用：攻撃」に上記を追加
    const categoryAttack = list.find(item => item.name === "戦闘用：武器");
    categoryAttack.roll = listWeapon;
}

/**
 * キャラクター名の描画
 * @param {Object} data キャラクターシートデータ
 */
export function drawCharacterName(data) {
    document.querySelector("#loadCharacter .name").textContent = data.characterName;
}

/**
 * ステータスの描画
 * @param {Object} data キャラクターシートデータ
 * @param {Number} mode モード番号
 */
export function drawStatus(data, mode = 0) {
    // --------------------------------------------------
    // セッションストレージからデータを取得
    // --------------------------------------------------

    if (data == null) {
        data = JSON.parse(sessionStorage.getItem("data"));
    }

    // --------------------------------------------------
    // 各ステータスをクリア
    // --------------------------------------------------

    document.querySelectorAll('.valueBlock>input[class^="status_"]').forEach(target => {
        target.value = "";
    });

    // --------------------------------------------------
    // 各ステータスを描画
    // --------------------------------------------------

    // HP
    setStatus(1, "HP", data.hpTotal, true);

    // MP
    setStatus(2, "MP", data.mpTotal, true);

    switch (mode) {
        // ●マギテック
        case 1:
            // 防護点
            setStatus(3, "防護点", data.defenseTotal1Def, true);

            // 移動力
            setStatus(4, "移動力", data.mobilityTotal, true);

            // 1ゾロ
            setStatus(5, "1ゾロ", 0);

            // ガメル
            setStatus(6, "G", data.moneyTotal);

            // 装填
            setStatus(7, "装填", 0);

            // 命中＋
            setStatus(9, "命中＋", 0, true);

            // 回避＋
            setStatus("10", "回避＋", getDodge(data), true);

            // ダメ＋
            setStatus("11", "ダメ＋", 0, true);

            break;

        // ●バード
        case 2:
            // 防護点
            setStatus(3, "防護点", data.defenseTotal1Def, true);

            // 楽素⤴
            setStatus(4, "楽素⤴", 0);

            // 移動力
            setStatus(5, "移動力", data.mobilityTotal, true);

            // 楽素⤵
            setStatus(6, "楽素⤵", 0);

            // 1ゾロ
            setStatus(7, "1ゾロ", 0);

            // 楽素♡
            setStatus(8, "楽素♡", 0);

            // ガメル
            setStatus(9, "G", data.money);

            // 命中＋
            setStatus("10", "命中＋", 0, true);

            // 回避＋
            setStatus("11", "回避＋", getDodge(data), true);

            // ダメ＋
            setStatus("12", "ダメ＋", 0, true);

            break;

        // ●カスタム
        case 3:
            // 防護点
            setStatus(3, "防護点", data.defenseTotal1Def, true);

            // 移動力
            setStatus(4, "移動力", data.mobilityTotal, true);

            // 1ゾロ
            setStatus(9, "1ゾロ", 0);

            // ガメル
            setStatus("10", "G", data.moneyTotal);

            // 命中＋
            setStatus("11", "命中＋", 0, true);

            // 回避＋
            setStatus("12", "回避＋", getDodge(data), true);

            // ダメ＋
            setStatus("13", "ダメ＋", 0, true);

            break;

        // ●戦士系
        case 4:
            // 命中＋
            setStatus(3, "命中＋", 0, true);

            // 防護点
            setStatus(4, "防護点", data.defenseTotal1Def, true);

            // 回避＋
            setStatus(5, "回避＋", getDodge(data), true);

            // 移動力
            setStatus(6, "移動力", data.mobilityTotal, true);

            // ダメ＋
            setStatus(7, "ダメ＋", 0, true);

            // 1ゾロ
            setStatus(8, "1ゾロ", 0);

            // ガメル
            setStatus(9, "G", data.moneyTotal);

            break;

        // ●スタンダード
        default:
            // 防護点
            setStatus(3, "防護点", data.defenseTotal1Def, true);

            // 移動力
            setStatus(4, "移動力", data.mobilityTotal, true);

            // 1ゾロ
            setStatus(5, "1ゾロ", 0);

            // ガメル
            setStatus(6, "G", data.moneyTotal);

            // 命中＋
            setStatus(9, "命中＋", 0, true);

            // 回避＋
            setStatus("10", "回避＋", getDodge(data), true);

            // ダメ＋
            setStatus("11", "ダメ＋", 0, true);
    }
}

/**
 * カードの描画
 * @param {Object} data キャラクターシートデータ
 */
export function drawContents(data) {
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

                // --------------------------------------------------
                // カテゴリー
                // --------------------------------------------------

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
                    cloneRoll.querySelector(".rollNote").textContent = note;
                } else {
                    cloneRoll.querySelector(".rollNote").classList.add("hidden");
                }

                // - 技能：名称
                cloneRoll.querySelector(".valueBlock.level  > .name").textContent = listSkill[roll.skill];

                // - 技能：レベル
                cloneRoll.querySelector(".valueBlock.level > .value").textContent = data[roll.skill];

                // --------------------------------------------------
                // 命中力
                // --------------------------------------------------

                // - 能力値ボーナス：背景色
                cloneRoll.querySelector(".card_skill.hit .valueBlock.bonus").classList.add(roll.hit.bonusId);

                // - 能力値ボーナス：名称
                cloneRoll.querySelector(".card_skill.hit .valueBlock.bonus > .name").textContent = listStatus[roll.hit.bonusId];

                // - 能力値ボーナス：値
                cloneRoll.querySelector(".card_skill.hit .valueBlock.bonus > .value").textContent = data["bonus" + roll.hit.bonusId];

                // - 能力値ボーナス：ボーナス修正
                let addHit = roll.hit.hitAdd;
                if (
                    addHit
                    && addHit != 0
                ) {
                    if (Number(addHit) > 0) {
                        addHit = "+" + addHit;
                    }
                    cloneRoll.querySelector(".card_skill.hit .valueBlock.add > .value").textContent = addHit;
                } else {
                    cloneRoll.querySelector(".card_skill.hit .valueBlock.add").classList.add("hidden");
                }

                // --------------------------------------------------
                // ダメージ
                // --------------------------------------------------

                // - 威力
                cloneRoll.querySelector(".card_skill.damage .valueBlock.rate > .value").textContent = roll.damage.rate;
                let addRate = roll.damage.rateAdd;
                if (addRate != 0) {
                    if (Number(addRate) > 0) {
                        addRate = "+" + addRate;
                    }

                    cloneRoll.querySelector(".card_skill.damage .valueBlock.rate > .add").textContent = addRate;
                }

                // - Ｃ値
                cloneRoll.querySelector(".card_skill.damage .valueBlock.critical > .value").textContent = roll.damage.critical;
                let addCritical = roll.damage.criticalAdd;
                if (addCritical != 0) {
                    if (Number(addCritical) > 0) {
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

                // --------------------------------------------------

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

                // 名称
                cloneRoll.querySelector(".magicName").textContent = roll.name;

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

                // - 備考
                let note = roll.note;
                if (note) {
                    cloneRoll.querySelector(".rollNote").textContent = note;
                } else {
                    cloneRoll.querySelector(".rollNote").classList.add("hidden");
                }

                // ●条件なし
                const addCondValue = cloneRoll.querySelector(".valueBlock.add");
                if (
                    typeof roll.cond === "undefined"
                    || (
                        data[roll.cond.targets]
                        && roll.cond.target.some(item => data[roll.cond.targets].indexOf(item) > -1)
                    )
                ) {
                    addCondValue.remove();
                }
                // ●条件あり
                else {
                    if (Number(roll.cond.bonus) < 0) {
                        addCondValue.classList.add("minus");
                    }
                    else if (Number(roll.cond.bonus) > 0) {
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
                // - 通常
                let usableSkill = 0;
                // - 条件付き
                let usableLimitSkill = 0;

                // 対象技能
                let targets = roll.skill;

                // 対象技能分ループ
                targets.forEach(skill => {
                    // テンプレートをクローン
                    const cloneSkill = tempSkill.content.cloneNode(true);

                    // サプリ
                    const bookName = skill.book;
                    const elemBook = cloneSkill.querySelector(".book");
                    if (bookName) {
                        elemBook.textContent = bookName;
                    } else {
                        elemBook.remove();
                    }

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
                        if (skill.note) {
                            // 条件付き
                            usableLimitSkill++;
                        } else {
                            // 通常
                            usableSkill++;
                        }
                    }

                    // 要素を追加
                    cloneRoll.querySelector(".skills").appendChild(cloneSkill);
                });

                // 使用可能な技能が無い場合、「平目」を追加
                if (usableSkill == 0) {
                    if (!typeMagic) {
                        const cloneSkill = tempSkill.content.cloneNode(true);

                        // 識別用クラスを不可
                        cloneSkill.firstElementChild.classList.add("flat");

                        // サプリ
                        cloneSkill.querySelector(".book").remove();

                        // 名称
                        cloneSkill.querySelector(".skillName > .name").textContent = "平目";

                        // レベル
                        cloneSkill.querySelector(".valueBlock.level > .value").textContent = 0;

                        // 注釈
                        if (roll.flatNote) {
                            const condition = document.createElement("div");
                            condition.classList.add("condition");
                            condition.textContent = roll.flatNote;
                            cloneSkill.querySelector('.card_skill').appendChild(condition);
                        }

                        // チェックＯＮ
                        cloneSkill.querySelector('input[type="checkbox"]').checked = true;

                        // 要素を追加
                        cloneRoll.querySelector(".skills").prepend(cloneSkill);

                        // 有効な行為判定があるＯＦＦ
                        flagNoSkill = false;
                    }

                    // 条件付き使用可能技能も無い場合
                    if (usableLimitSkill == 0) {
                        // 親要素（行為判定）の能力値ボーナスをグレーアウト
                        cloneRoll.querySelector(".valueBlock.bonus").classList.add("flat");
                    }
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
 * @param {Object} data キャラクターシートデータ
 * @param {String} skillCategory カテゴリー・キー名
 * @param {String} targetName 対象習得要素・キー名
 */
function checkLearn(data, skillCategory, targetName) {
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

/**
 * 「読み込み履歴」の表示
 */
export function showLoadLog() {
    // コンテナ表示
    document.getElementById("loadLog").classList.remove("hidden");

    // 読み込み履歴を取得
    const loadListValue = getLoadLog();

    // リスト要素の取得
    let target = document.querySelector("#loadLog>.logList");

    // 一旦中身を空にする
    target.innerHTML = "";

    // テンプレートを取得
    const tempLog = document.getElementById("temp_log");

    // リストの作成
    Object.keys(loadListValue).forEach(key => {
        // 違うサイトの場合、スキップ
        const targetKey = document.querySelector('.displayLimit_ytsheet>.urlPrefix').innerText;
        if (key.indexOf(targetKey) == -1) {
            return;
        }

        // 対象データを取得
        let jsonData = JSON.parse(loadListValue[key]);

        // テンプレートをクローン
        let listItem = tempLog.content.cloneNode(true);

        // IDを付与
        listItem.firstElementChild.id = key;

        // ＰＣ名ボタンを作成
        let buttonLoad = listItem.querySelector('.button_logLoad');
        buttonLoad.innerText = jsonData.characterName;

        // リスト要素を追加
        target.appendChild(listItem);
    })
}
