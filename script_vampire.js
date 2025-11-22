// ====================================================================================================
// 定数・変数
// ====================================================================================================

/**
 * 能力値ボーナス
 */
const listStatus = {
    NB1: "器用度",
    NB2: "敏捷度",
    NB3: "筋力",
    NB4: "生命力",
    NB5: "知力",
    NB6: "精神力",
}

/**
 * 技能レベル
 */
const listSkill = {
    // ●冒険者レベル
    lv: "冒険者レベル",

    // ●戦士系
    V_GLv1: "ファイター",
    V_GLv2: "グラップラー",
    V_GLv3: "フェンサー",
    V_GLv4: "シューター",
    V_GLv26: "バトルダンサー",

    // ●魔法使い系
    V_GLv5: "ソーサラー",
    V_GLv6: "コンジャラー",
    V_GLv7: "プリースト",
    V_GLv9: "マギテック",
    V_GLv8: "フェアリーテイマー",
    V_GLv17: "デーモンルーラー",
    V_GLv24: "ドルイド",
    V_GLv27: "アビスゲイザー",

    // ●その他系
    V_GLv10: "スカウト",
    V_GLv11: "レンジャー",
    V_GLv12: "セージ",
    V_GLv13: "エンハンサー",
    V_GLv14: "バード",
    V_GLv16: "ライダー",
    V_GLv15: "アルケミスト",
    V_GLv25: "ジオマンサー",
    V_GLv18: "ウォーリーダー",
    V_GLv28: "ダークハンター",

    // TODO: 何系？
    V_GLv20: "フィジカルマスター",
};

/**
 * 論理名からクラスのIDを取得
 * @param {string} name 論理名
 * @returns ID
 */
function getClassId(name) {
    for (const key in listSkill) {
        if (Object.hasOwnProperty.call(listSkill, key)) {
            if (listSkill[key] === name) {
                return key;
            }
        }
    }

    console.log("クラスID取得失敗 = " + name);
    return null;
}

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
                bonusId: "NB1",
                skill: [
                    { id: getClassId("スカウト") },
                    { id: getClassId("レンジャー") },
                ]
            },
            {
                name: "応急手当",
                bonusId: "NB1",
                skill: [
                    { id: getClassId("レンジャー") },
                ]
            },
            {
                name: "解除",
                bonusId: "NB1",
                cond: {
                    name: "ツール未所持",
                    targets: "item_name",
                    target: ["スカウト用ツール", "精密ツールセット"],
                    bonus: -4,
                },
                skill: [
                    { id: getClassId("スカウト") },
                    {
                        id: getClassId("レンジャー"),
                        note: "自然物を利用した罠のみ"
                    },
                ]
            },
            {
                name: "スリ",
                bonusId: "NB1",
                skill: [
                    { id: getClassId("スカウト") },
                ]
            },
            {
                name: "変装",
                bonusId: "NB1",
                skill: [
                    { id: getClassId("スカウト") },
                ]
            },
            {
                name: "罠設置",
                bonusId: "NB1",
                skill: [
                    { id: getClassId("スカウト") },
                    {
                        id: getClassId("レンジャー"),
                        note: "自然物を利用した罠のみ"
                    },
                ]
            },
            // 敏捷度
            {
                name: "受け身",
                bonusId: "NB2",
                skill: [
                    { id: getClassId("スカウト") },
                    { id: getClassId("レンジャー") },
                    {
                        id: getClassId("ライダー"),
                        book: "Ⅲ",
                    },
                ]
            },
            {
                name: "隠密",
                bonusId: "NB2",
                skill: [
                    { id: getClassId("スカウト") },
                    { id: getClassId("レンジャー") },
                ]
            },
            {
                name: "軽業",
                bonusId: "NB2",
                skill: [
                    { id: getClassId("スカウト") },
                    { id: getClassId("レンジャー") },
                ]
            },
            {
                name: "登攀",
                bonusId: "NB2",
                skill: [
                    { id: getClassId("スカウト") },
                    { id: getClassId("レンジャー") },
                ]
            },
            {
                name: "尾行",
                bonusId: "NB2",
                skill: [
                    { id: getClassId("スカウト") },
                    { id: getClassId("レンジャー") },
                ]
            },
            {
                book: "Ⅲ",
                name: "騎乗",
                bonusId: "NB2",
                skill: [
                    {
                        id: getClassId("ライダー"),
                        book: "Ⅲ",
                    },
                ]
            },
            // 知力
            {
                name: "足跡追跡",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("スカウト") },
                    { id: getClassId("レンジャー") },
                    {
                        id: getClassId("ライダー"),
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "KG_name",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                name: "異常感知",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("スカウト") },
                    {
                        id: getClassId("レンジャー"),
                        note: "自然環境のみ"
                    },
                    {
                        id: getClassId("ライダー"),
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "KG_name",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                name: "聞き耳",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("スカウト") },
                    { id: getClassId("レンジャー") },
                ]
            },
            {
                name: "危険感知",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("スカウト") },
                    { id: getClassId("レンジャー") },
                    {
                        id: getClassId("ライダー"),
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "KG_name",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                name: "見識",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("セージ") },
                    { id: "V_GLv14" },
                    {
                        id: getClassId("アルケミスト"),
                        book: "Ⅲ",
                    },
                ]
            },
            {
                name: "探索",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("スカウト") },
                    {
                        id: getClassId("レンジャー"),
                        note: "自然環境のみ"
                    },
                    {
                        id: getClassId("ライダー"),
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "KG_name",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                name: "地図作成",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("スカウト") },
                    {
                        id: getClassId("レンジャー"),
                        note: "自然環境のみ"
                    },
                    { id: getClassId("セージ") },
                    {
                        id: getClassId("ライダー"),
                        book: "Ⅲ",
                    },
                ]
            },
            {
                name: "天候予測",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("スカウト") },
                    { id: getClassId("レンジャー") },
                ]
            },
            {
                name: "病気知識",
                bonusId: "NB5",
                skill: [
                    {
                        id: getClassId("レンジャー"),
                        note: "自然環境のみ"
                    },
                    { id: getClassId("セージ") },
                ]
            },
            {
                name: "文献",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("セージ") },
                ]
            },
            {
                name: "文明鑑定",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("セージ") },
                ]
            },
            {
                name: "宝物鑑定",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("スカウト") },
                    { id: getClassId("セージ") },
                ]
            },
            {
                name: "魔法行使",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv5" },
                    { id: "V_GLv6" },
                    { id: "V_GLv7" },
                    { id: "V_GLv9" },
                    {
                        id: "V_GLv8",
                        book: "Ⅱ",
                    },
                    {
                        id: getClassId("ドルイド"),
                        book: "ML",
                    },
                    {
                        id: getClassId("デーモンルーラー"),
                        book: "ML",
                    },
                ]
            },
            {
                name: "薬品学",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("レンジャー") },
                    { id: getClassId("セージ") },
                    {
                        id: getClassId("アルケミスト"),
                        book: "Ⅲ",
                    },
                ]
            },
            {
                name: "罠回避",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("スカウト") },
                    {
                        id: getClassId("レンジャー"),
                        note: "自然物を利用した罠のみ"
                    },
                    {
                        id: getClassId("ライダー"),
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "KG_name",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                book: "Ⅱ",
                name: "聞き込み",
                bonusId: "NB5",
                skill: [
                    { id: getClassId("ファイター") },
                    { id: "V_GLv2" },
                    { id: "V_GLv3" },
                    { id: "V_GLv4" },
                    {
                        id: "V_GLv26",
                        book: "BM",
                    },

                    { id: "V_GLv5" },
                    { id: "V_GLv6" },
                    { id: "V_GLv7" },
                    { id: "V_GLv9" },
                    {
                        id: "V_GLv8",
                        book: "Ⅱ",
                    },
                    {
                        id: getClassId("ドルイド"),
                        book: "ML",
                    },
                    {
                        id: getClassId("デーモンルーラー"),
                        book: "ML",
                    },
                    // { id: "V_GLv27" },

                    { id: getClassId("スカウト") },
                    { id: getClassId("レンジャー") },
                    { id: getClassId("セージ") },
                    {
                        id: getClassId("エンハンサー"),
                        book: "Ⅱ",
                    },
                    {
                        id: "V_GLv14",
                        book: "Ⅱ",
                    },
                    {
                        id: getClassId("ライダー"),
                        book: "Ⅲ",
                    },
                    {
                        id: getClassId("アルケミスト"),
                        book: "Ⅲ",
                    },
                    // { id: "V_GLv25" },
                    // { id: "V_GLv18" },
                    // { id: "V_GLv28" },
                    // { id: "V_GLv20" },
                ]
            },
            {
                book: "Ⅲ",
                name: "弱点隠蔽",
                bonusId: "NB5",
                skill: [
                    {
                        id: getClassId("ライダー"),
                        book: "Ⅲ",
                    },
                ]
            },
            {
                book: "Ⅲ",
                name: "賦術",
                bonusId: "NB5",
                skill: [
                    {
                        id: getClassId("アルケミスト"),
                        book: "Ⅲ",
                    },
                ]
            },
            {
                book: "ML",
                name: "送還",
                bonusId: "NB5",
                skill: [
                    {
                        id: getClassId("デーモンルーラー"),
                        book: "ML",
                    },
                ]
            },
            {
                book: "Ⅱ",
                name: "演奏",
                bonusId: "NB6",
                skill: [
                    { id: "V_GLv14" },
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
                bonusId: "NB1",
                skill: [
                    { id: getClassId("スカウト") },
                ]
            },
            {
                name: "レンジャー技巧",
                bonusId: "NB1",
                skill: [
                    { id: getClassId("レンジャー") },
                ]
            },
            {
                name: "スカウト運動",
                bonusId: "NB2",
                skill: [
                    { id: getClassId("スカウト") },
                ]
            },
            {
                name: "レンジャー運動",
                bonusId: "NB2",
                skill: [
                    { id: getClassId("レンジャー") },
                ]
            },
            {
                name: "ライダー運動",
                bonusId: "NB2",
                skill: [
                    {
                        id: getClassId("ライダー"),
                        book: "Ⅲ",
                    },
                ]
            },
            {
                name: "スカウト観察",
                bonusId: "NB3",
                skill: [
                    { id: getClassId("スカウト") },
                ]
            },
            {
                name: "レンジャー観察",
                bonusId: "NB3",
                skill: [
                    { id: getClassId("レンジャー") },
                ]
            },
            {
                name: "ライダー観察",
                bonusId: "NB3",
                skill: [
                    {
                        id: getClassId("ライダー"),
                        book: "Ⅲ",
                        note: "要：【探索指令】(Ⅲ-P.195)",
                        cond: {
                            category: "KG_name",
                            target: "探索指令"
                        }
                    },
                ]
            },
            {
                name: "セージ知識",
                bonusId: "NB3",
                skill: [
                    { id: getClassId("セージ") },
                ]
            },
            {
                name: "ライダー知識",
                bonusId: "NB3",
                skill: [
                    {
                        id: getClassId("ライダー"),
                        book: "Ⅲ",
                    },
                ]
            },
            {
                name: "アルケミスト知識",
                bonusId: "NB3",
                skill: [
                    {
                        id: getClassId("アルケミスト"),
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
                bonusId: "NB2",
                skill: [
                    { id: "lv" },
                ]
            },
            {
                book: "Ⅱ",
                name: "水泳",
                bonusId: "NB2",
                skill: [
                    { id: "lv" },
                ]
            },
            {
                name: "登攀",
                bonusId: "NB3",
                skill: [
                    { id: "lv" },
                ]
            },
            {
                name: "腕力",
                bonusId: "NB3",
                skill: [
                    { id: "lv" },
                ]
            },
            {
                name: "生死",
                bonusId: "NB4",
                skill: [
                    { id: "lv" },
                ]
            },
            {
                name: "真偽",
                bonusId: "NB5",
                skill: [
                    { id: "lv" },
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
                bonusId: "NB5",
                flatNote: "弱点看破不能",
                skill: [
                    { id: getClassId("セージ") },
                    {
                        id: getClassId("ライダー"),
                        note: "弱点看破不能",
                    },
                ]
            },
            {
                name: "先制",
                bonusId: "NB2",
                skill: [
                    { id: getClassId("スカウト") },
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
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv5" },
                    { id: "V_GLv6" },
                    { id: "V_GLv7" },
                    { id: "V_GLv9" },
                    {
                        id: "V_GLv8",
                        book: "Ⅱ",
                    },
                    // ドルイド
                    {
                        id: "V_GLv24",
                        book: "ML",
                    },
                    // デーモンルーラー
                    {
                        id: getClassId("デーモンルーラー"),
                        book: "ML",
                    },
                ]
            },
            {
                name: "プリセット２",
                rate: 10,
                critical: 10,
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv5" },
                    { id: "V_GLv6" },
                    { id: "V_GLv7" },
                    { id: "V_GLv9" },
                    {
                        id: "V_GLv8",
                        book: "Ⅱ",
                    },
                    // ドルイド
                    {
                        id: "V_GLv24",
                        book: "ML",
                    },
                    // デーモンルーラー
                    {
                        id: getClassId("デーモンルーラー"),
                        book: "ML",
                    },
                ]
            },
            {
                name: "プリセット３",
                rate: 20,
                critical: 10,
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv5" },
                    { id: "V_GLv6" },
                    { id: "V_GLv7" },
                    { id: "V_GLv9" },
                    {
                        id: "V_GLv8",
                        book: "Ⅱ",
                    },
                    // ドルイド
                    {
                        id: "V_GLv24",
                        book: "ML",
                    },
                    // デーモンルーラー
                    {
                        id: getClassId("デーモンルーラー"),
                        book: "ML",
                    },
                ]
            },
            {
                name: "プリセット４",
                rate: 30,
                critical: 10,
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv5" },
                    { id: "V_GLv6" },
                    { id: "V_GLv7" },
                    { id: "V_GLv9" },
                    {
                        id: "V_GLv8",
                        book: "Ⅱ",
                    },
                    // ドルイド
                    {
                        id: "V_GLv24",
                        book: "ML",
                    },
                    // デーモンルーラー
                    {
                        id: getClassId("デーモンルーラー"),
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
                bonusId: "NB2",
                skill: [
                    { id: getClassId("ファイター") },
                    { id: "V_GLv2" },
                    { id: "V_GLv3" },
                    {
                        id: "V_GLv4",
                        note: "《射手の体術》(Ⅱ-P.227)が必要",
                        cond: {
                            category: "ST_name",
                            target: "射手の体術"
                        }
                    },
                    {
                        id: "V_GLv26",
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
                bonusId: "NB4",
                skill: [
                    { id: "lv" },
                ]
            },
            {
                name: "精神抵抗力",
                bonusId: "NB6",
                skill: [
                    { id: "lv" },
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
            "name": data.pc_name,
            "memo": null,
            "externalUrl": getUrl(),
            "status": listStatus,
            "params": [
                // ボーナス
                {
                    "label": "器用度",
                    "value": data.NB1,
                },
                {
                    "label": "敏捷度",
                    "value": data.NB2,
                },
                {
                    "label": "筋力",
                    "value": data.NB3,
                },
                {
                    "label": "生命力",
                    "value": data.NB4,
                },
                {
                    "label": "知力",
                    "value": data.NB5,
                },
                {
                    "label": "精神力",
                    "value": data.NB6,
                },
                // 冒険者レベル
                {
                    "label": "冒険者レベル",
                    "value": data.lv,
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

    // V_GLvから始まるデータを取得
    const array = Object.keys(data)
        .map(
            k => ({
                key: k,
                value: data[k]
            })
        )
        .filter(
            target => target.key.indexOf("V_GLv") === 0
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
export function getSkillLevelForName(name) {
    const listSkillR = Object.fromEntries(
        Object.entries(listSkill)
            .map(([key, value]) => [value, key])
    );

    return listSkillR[name];
}

/**
 * 「戦闘用：攻撃」カテゴリーの生成
 * @param {Object} data キャラクターシートデータ
 * @param {Object} list 行為判定リスト
 */
export function setAttack(data, list) {

    // 武器データを取得
    let listWeapon = [];
    for (let i = 0; i < data.V_arms_id.length; i++) {
        // 技能名称
        const className = listSkill["V_GLv" + data.V_arms_hit_ginou[i]];

        // 技能が設定されていない場合は無視
        if (!className) {
            continue;
        }

        // 配列の生成
        listWeapon.push({
            name: data.arms_name[i],
            skill: getSkillLevelForName(className),
            usage: data.arms_yoho[i],
            note: data.arms_memo[i],
            hit: {
                bonusId: "NB1", // 器用度
                hitAdd: data.arms_hit_mod[i],
            },
            damage: {
                rate: data.arms_iryoku[i],
                rateAdd: Number(data.arms_damage[i]) - Number(data["V_GLv" + data.V_arms_hit_ginou[i]]) - Number(data.NB3),
                critical: data.arms_critical[i],
                criticalAdd: (data.V_arms_hit_ginou[i] == 3) ? -1 : 0,
                bonusId: "NB3", // 筋力
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
    document.querySelector("#loadCharacter .name").textContent = data.pc_name;
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

    document.querySelectorAll('input[id^="status_"]').forEach(target => {
        target.value = "";
    });

    // --------------------------------------------------
    // 各ステータスを描画
    // --------------------------------------------------

    // HP
    setStatus("1", "HP", data.HP, true);

    // MP
    setStatus("2", "MP", data.MP, true);

    switch (mode) {

        // ●マギテック
        case 1:
            // 防護点
            setStatus("3", "防護点", data.bougo, true);

            // 移動力
            setStatus("4", "移動力", data.ido, true);

            // 1ゾロ
            setStatus("5", "1ゾロ", 0);

            // ガメル
            setStatus("6", "G", data.money);

            // 装填
            setStatus("7", "装填", 0);

            // 命中＋
            setStatus("9", "命中＋", 0, true);

            // 回避＋
            setStatus("10", "回避＋", Number(data.armor_kaihi) + Number(data.bougu_kaihi_mod) + Number(data.bougu_kaihi_tokugi), true);

            // ダメ＋
            setStatus("11", "ダメ＋", 0, true);

            break;

        // ●バード
        case 2:
            // 防護点
            setStatus("3", "防護点", data.bougo, true);

            // 楽素⤴
            setStatus("4", "楽素⤴", 0);

            // 移動力
            setStatus("5", "移動力", data.ido, true);

            // 楽素⤵
            setStatus("6", "楽素⤵", 0);

            // 1ゾロ
            setStatus("7", "1ゾロ", 0);

            // 楽素♡
            setStatus("8", "楽素♡", 0);

            // ガメル
            setStatus("9", "G", data.money);

            // 命中＋
            setStatus("10", "命中＋", 0, true);

            // 回避＋
            setStatus("11", "回避＋", Number(data.armor_kaihi) + Number(data.bougu_kaihi_mod) + Number(data.bougu_kaihi_tokugi), true);

            // ダメ＋
            setStatus("12", "ダメ＋", 0, true);

            break;

        // ●カスタム
        case 3:
            // 防護点
            setStatus("3", "防護点", data.bougo, true);

            // 移動力
            setStatus("4", "移動力", data.ido, true);

            // 1ゾロ
            setStatus("9", "1ゾロ", 0);

            // ガメル
            setStatus("10", "G", data.money);

            // 命中＋
            setStatus("11", "命中＋", 0, true);

            // 回避＋
            setStatus("12", "回避＋", Number(data.armor_kaihi) + Number(data.bougu_kaihi_mod) + Number(data.bougu_kaihi_tokugi), true);

            // ダメ＋
            setStatus("13", "ダメ＋", 0, true);

            break;

        // ●戦士系
        case 4:
            // 命中＋
            setStatus("3", "命中＋", 0, true);

            // 防護点
            setStatus("4", "防護点", data.bougo, true);

            // 回避＋
            setStatus("5", "回避＋", Number(data.armor_kaihi) + Number(data.bougu_kaihi_mod) + Number(data.bougu_kaihi_tokugi), true);

            // 移動力
            setStatus("6", "移動力", data.ido, true);

            // ダメ＋
            setStatus("7", "ダメ＋", 0, true);

            // 1ゾロ
            setStatus("8", "1ゾロ", 0);

            // ガメル
            setStatus("9", "G", data.money);

            break;

        // ●スタンダード
        default:
            // 防護点
            setStatus("3", "防護点", data.bougo, true);

            // 移動力
            setStatus("4", "移動力", data.ido, true);

            // 1ゾロ
            setStatus("5", "1ゾロ", 0);

            // ガメル
            setStatus("6", "G", data.money);

            // 命中＋
            setStatus("9", "命中＋", 0, true);

            // 回避＋
            setStatus("10", "回避＋", Number(data.armor_kaihi) + Number(data.bougu_kaihi_mod) + Number(data.bougu_kaihi_tokugi), true);

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
            // クローン用
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
                    cloneRoll.querySelector(".rollNote").textContent = note;
                } else {
                    cloneRoll.querySelector(".rollNote").classList.add("hidden");
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
                cloneRoll.querySelector(".card_skill.hit .valueBlock.bonus > .value").textContent = data[roll.hit.bonusId];
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

                // ダメージ
                // - 威力
                cloneRoll.querySelector(".card_skill.damage .valueBlock.rate > .value").textContent = roll.damage.rate;
                let addRate = roll.damage.rateAdd;
                if (Number(addRate) != 0) {
                    if (Number(addRate) > 0) {
                        addRate = "+" + addRate;
                    }
                    cloneRoll.querySelector(".card_skill.damage .valueBlock.rate > .add").textContent = addRate;
                }
                // - Ｃ値
                let addCritical = roll.damage.criticalAdd;
                cloneRoll.querySelector(".card_skill.damage .valueBlock.critical > .value").textContent = Number(roll.damage.critical) - Number(addCritical);
                if (Number(addCritical) != 0) {
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
                cloneRoll.querySelector(".card_skill.damage .valueBlock.bonus > .value").textContent = data[roll.damage.bonusId];

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
                cloneRoll.querySelector(".valueBlock.bonus > .value").textContent = data[roll.bonusId];
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
                cloneRoll.querySelector(".valueBlock.bonus > .value").textContent = data[roll.bonusId];

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
                        && roll.cond.target.some(item => data[roll.cond.targets].includes(item))
                    )
                ) {
                    // 要素を削除
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
                    // 要素に値を入れる
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
                    if (
                        data[skill.id] == undefined
                        || data[skill.id] == 0
                        || !flagUsable
                    ) {
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

                // ●使用可能な技能が無い場合
                if (usableSkill == 0) {
                    // 「平目」を追加（魔法以外）
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
export function checkLearn(data, skillCategory, targetName) {
    // 指定した戦闘特技を習得しているか
    return data[skillCategory].some(target => target == targetName);
}
