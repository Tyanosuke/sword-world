/**
 * 定数
 */

// 能力値ボーナス
const listStatus = {
    NB1: "器用度",
    NB2: "敏捷度",
    NB3: "筋力",
    NB4: "生命力",
    NB5: "知力",
    NB6: "精神力",
}

// 技能レベル
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
    V_GLv20: "フィジカルマスター",
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
                bonusId: "NB1",
                skill: [
                    { id:"V_GLv10" },
                    { id:"V_GLv11" },
                ]
            },
            {
                name: "応急手当",
                bonusId: "NB1",
                skill: [
                    { id: "V_GLv11" },
                ]
            },
            {
                name: "解除",
                bonusId: "NB1",
                skill: [
                    { id: "V_GLv10" },
                    {
                        id: "V_GLv11",
                        limit: "自然物を利用した罠のみ"
                    },
                ]
            },
            {
                name: "スリ",
                bonusId: "NB1",
                skill: [
                    { id: "V_GLv10" },
                ]
            },
            {
                name: "変装",
                bonusId: "NB1",
                skill: [
                    { id: "V_GLv10" },
                ]
            },
            {
                name: "罠設置",
                bonusId: "NB1",
                skill: [
                    { id: "V_GLv10" },
                    {
                        id: "V_GLv11",
                        limit: "自然物を利用した罠のみ"
                    },
                ]
            },
            // 敏捷度
            {
                name: "受け身",
                bonusId: "NB2",
                skill: [
                    { id: "V_GLv10" },
                    { id: "V_GLv11" },
                    { id: "V_GLv16" },
                ]
            },
            {
                name: "隠密",
                bonusId: "NB2",
                skill: [
                    { id: "V_GLv10" },
                    { id: "V_GLv11" },
                ]
            },
            {
                name: "軽業",
                bonusId: "NB2",
                skill: [
                    { id: "V_GLv10" },
                    { id: "V_GLv11" },
                ]
            },
            {
                name: "登攀",
                bonusId: "NB2",
                skill: [
                    { id: "V_GLv10" },
                    { id: "V_GLv11" },
                ]
            },
            {
                name: "尾行",
                bonusId: "NB2",
                skill: [
                    { id: "V_GLv10" },
                    { id: "V_GLv11" },
                ]
            },
            {
                book: "Ⅲ",
                name: "騎乗",
                bonusId: "NB2",
                skill: [
                    { id: "V_GLv16" },
                ]
            },
            // 知力
            {
                name: "足跡追跡",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv10" },
                    { id: "V_GLv11" },
                    {
                        id: "V_GLv16",
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
                    { id: "V_GLv10" },
                    {
                        id: "V_GLv11",
                        limit: "自然環境のみ"
                    },
                    {
                        id: "V_GLv16",
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
                    { id: "V_GLv10" },
                    { id: "V_GLv11" },
                ]
            },
            {
                name: "危険感知",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv10" },
                    { id: "V_GLv11" },
                    {
                        id: "V_GLv16",
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
                    { id: "V_GLv12" },
                    { id: "V_GLv14" },
                    { id: "V_GLv15" },
                ]
            },
            {
                name: "探索",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv10" },
                    {
                        id: "V_GLv11",
                        limit: "自然環境のみ"
                    },
                    {
                        id: "V_GLv16",
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
                    { id: "V_GLv10" },
                    {
                        id: "V_GLv11",
                        limit: "自然環境のみ"
                    },
                    { id: "V_GLv12" },
                    { id: "V_GLv16" },
                ]
            },
            {
                name: "天候予測",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv10" },
                    { id: "V_GLv11" },
                ]
            },
            {
                name: "病気知識",
                bonusId: "NB5",
                skill: [
                    {
                        id: "V_GLv11",
                        limit: "自然環境のみ"
                    },
                    { id: "V_GLv12" },
                ]
            },
            {
                name: "文献",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv12" },
                ]
            },
            {
                name: "文明鑑定",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv12" },
                ]
            },
            {
                name: "宝物鑑定",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv10" },
                    { id: "V_GLv12" },
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
                    { id: "V_GLv8" },
                ]
            },
            {
                name: "薬品学",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv11" },
                    { id: "V_GLv12" },
                    { id: "V_GLv15" },
                ]
            },
            {
                name: "罠回避",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv10" },
                    {
                        id: "V_GLv11",
                        limit: "自然物を利用した罠のみ"
                    },
                    {
                        id: "V_GLv16",
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
            },
            {
                book: "Ⅲ",
                name: "弱点隠蔽",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv16" },
                ]
            },
            {
                book: "Ⅲ",
                name: "賦術",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv15" },
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
    {
        name: "戦闘用：開始時",
        roll: [
            {
                name: "魔物知識",
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv12" },
                    {
                        id: "V_GLv16",
                        note: "弱点獲得に条件あり(Ⅲ-P.84)"
                    },
                ]
            },
            {
                name: "先制",
                bonusId: "NB2",
                skill: [
                    { id: "V_GLv10" },
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
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv5" },
                    { id: "V_GLv6" },
                    { id: "V_GLv7" },
                    { id: "V_GLv9" },
                    { id: "V_GLv8" },
                ]
            },
            {
                rate : 10,
                critical: 10,
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv5" },
                    { id: "V_GLv6" },
                    { id: "V_GLv7" },
                    { id: "V_GLv9" },
                    { id: "V_GLv8" },
                ]
            },
            {
                rate : 20,
                critical: 10,
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv5" },
                    { id: "V_GLv6" },
                    { id: "V_GLv7" },
                    { id: "V_GLv9" },
                    { id: "V_GLv8" },
                ]
            },
            {
                rate : 30,
                critical: 10,
                bonusId: "NB5",
                skill: [
                    { id: "V_GLv5" },
                    { id: "V_GLv6" },
                    { id: "V_GLv7" },
                    { id: "V_GLv9" },
                    { id: "V_GLv8" },
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
                bonusId: "NB2",
                skill: [
                    { id: "V_GLv1" },
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
 */
export function getSkillLevelForName (name) {
    const listSkillR = Object.fromEntries(
        Object.entries(listSkill)
            .map(([key, value]) => [value, key])
    );

    return listSkillR[name];
}

/**
 * 「戦闘用：攻撃」カテゴリーの生成
 */
 export function setAttack (data, list) {

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
                bonusId: "NB1",
                hitAdd : data.arms_hit_mod[i],
            },
            damage: {
                rate : data.arms_iryoku[i],
                rateAdd : data.arms_damage_mod[i],
                critical: data.arms_critical[i],
                bonusId: "NB3",
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
    document.querySelector("#loadCharacter .name").textContent = data.pc_name;
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
    document.getElementById("status_value_1").value = data.HP;
    document.getElementById("status_max_1").value = data.HP;

    // ＭＰ
    document.getElementById("status_name_2").value = "MP";
    document.getElementById("status_value_2").value = data.MP;
    document.getElementById("status_max_2").value = data.MP;

    switch(mode) {
        // ●マギテック
        case 1:
            // 防護点
            document.getElementById("status_name_3").value = "防護点";
            document.getElementById("status_value_3").value = data.bougo;
            document.getElementById("status_max_3").value = data.bougo;

            // 移動力
            document.getElementById("status_name_4").value = "移動力";
            document.getElementById("status_value_4").value = data.ido;
            document.getElementById("status_max_4").value = data.ido;

            // 1ゾロ
            document.getElementById("status_name_5").value = "1ゾロ";
            document.getElementById("status_value_5").value = 0;

            // ガメル
            document.getElementById("status_name_6").value = "G";
            document.getElementById("status_value_6").value = data.money;

            // 装填
            document.getElementById("status_name_7").value = "装填";
            document.getElementById("status_value_7").value = 0;

            // 命中力修正
            document.getElementById("status_name_9").value = "命中力修正";
            document.getElementById("status_value_9").value = 0;
            document.getElementById("status_max_9").value = 0;

            // 回避力修正
            document.getElementById("status_name_10").value = "回避力修正";
            document.getElementById("status_value_10").value = data.kaihi;
            document.getElementById("status_max_10").value = data.kaihi;

            // ダメージ修正
            document.getElementById("status_name_11").value = "ダメージ修正";
            document.getElementById("status_value_11").value = 0;
            document.getElementById("status_max_11").value = 0;

            break;

        // ●バード
        case 2:
            // 防護点
            document.getElementById("status_name_3").value = "防護点";
            document.getElementById("status_value_3").value = data.bougo;
            document.getElementById("status_max_3").value = data.bougo;

            // 楽素⤴
            document.getElementById("status_name_4").value = "楽素⤴";
            document.getElementById("status_value_4").value = 0;

            // 移動力
            document.getElementById("status_name_5").value = "移動力";
            document.getElementById("status_value_5").value = data.ido;
            document.getElementById("status_max_5").value = data.ido;

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
            document.getElementById("status_value_9").value = data.money;

            // 命中力修正
            document.getElementById("status_name_10").value = "命中力修正";
            document.getElementById("status_value_10").value = 0;
            document.getElementById("status_max_10").value = 0;

            // 回避力修正
            document.getElementById("status_name_11").value = "回避力修正";
            document.getElementById("status_value_11").value = data.kaihi;
            document.getElementById("status_max_11").value = data.kaihi;

            // ダメージ修正
            document.getElementById("status_name_12").value = "ダメージ修正";
            document.getElementById("status_value_12").value = 0;
            document.getElementById("status_max_12").value = 0;

            break;

        // ●シンプル
        case 3:
            // 防護点
            document.getElementById("status_name_3").value = "防護点";
            document.getElementById("status_value_3").value = data.bougo;
            document.getElementById("status_max_3").value = data.bougo;

            // 移動力
            document.getElementById("status_name_4").value = "移動力";
            document.getElementById("status_value_4").value = data.ido;
            document.getElementById("status_max_4").value = data.ido;

            // 1ゾロ
            document.getElementById("status_name_9").value = "1ゾロ";
            document.getElementById("status_value_9").value = 0;

            // ガメル
            document.getElementById("status_name_10").value = "G";
            document.getElementById("status_value_10").value = data.money;

            // 命中力修正
            document.getElementById("status_name_11").value = "命中力修正";
            document.getElementById("status_value_11").value = 0;
            document.getElementById("status_max_11").value = 0;

            // 回避力修正
            document.getElementById("status_name_12").value = "回避力修正";
            document.getElementById("status_value_12").value = data.kaihi;
            document.getElementById("status_max_12").value = data.kaihi;

            // ダメージ修正
            document.getElementById("status_name_13").value = "ダメージ修正";
            document.getElementById("status_value_13").value = 0;
            document.getElementById("status_max_13").value = 0;

            break;

        // ●スタンダード
        default:
            // 防護点
            document.getElementById("status_name_3").value = "防護点";
            document.getElementById("status_value_3").value = data.bougo;
            document.getElementById("status_max_3").value = data.bougo;

            // 移動力
            document.getElementById("status_name_4").value = "移動力";
            document.getElementById("status_value_4").value = data.ido;
            document.getElementById("status_max_4").value = data.ido;

            // 1ゾロ
            document.getElementById("status_name_5").value = "1ゾロ";
            document.getElementById("status_value_5").value = 0;

            // ガメル
            document.getElementById("status_name_6").value = "G";
            document.getElementById("status_value_6").value = data.money;

            // 命中力修正
            document.getElementById("status_name_9").value = "命中力修正";
            document.getElementById("status_value_9").value = 0;
            document.getElementById("status_max_9").value = 0;

            // 回避力修正
            document.getElementById("status_name_10").value = "回避力修正";
            document.getElementById("status_value_10").value = data.kaihi;
            document.getElementById("status_max_10").value = data.kaihi;

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
                cloneRoll.querySelector(".card_skill.hit .valueBlock.bonus > .value").textContent = data[roll.hit.bonusId];
                // - 能力値ボーナス：ボーナス修正
                let addHit = data["bonus" + roll.hit.hitAdd];
                if (addHit > 0) {
                    addHit = "+" + addHit;
                }
                cloneRoll.querySelector(".card_skill.hit .valueBlock.bonus > .add").textContent = addHit;

                // ダメージ
                // - 威力
                cloneRoll.querySelector(".card_skill.damage .valueBlock.rate > .value").textContent = roll.damage.rate;
                let addRate = roll.damage.rateAdd;
                if (addRate > 0) {
                    addRate = "+" + addRate;
                }
                cloneRoll.querySelector(".card_skill.damage .valueBlock.rate > .add").textContent = addRate;
                // - Ｃ値
                cloneRoll.querySelector(".card_skill.damage .valueBlock.critical > .value").textContent = roll.damage.critical;
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
                        .filter(key => key != "lv") // 「冒険者レベル」は除く
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
                        usableSkill++;
                    }

                    // 要素を追加
                    cloneRoll.querySelector(".skills").appendChild(cloneSkill);
                });

                // ●使用可能な技能が無い場合
                if (usableSkill == 0) {
                    // 「平目」を追加（魔法以外）
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

                        // 有効な行為判定がある
                        flagNoSkill = false;
                    }

                    // 親要素（行為判定）の能力値ボーナスをグレーアウト
                    cloneRoll.querySelector(".valueBlock.bonus").classList.add("flat");
                }
                // ●それ以外の場合
                else {
                    // 有効な行為判定がある
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
    // 指定した戦闘特技を習得しているか
    return data[skillCategory].some(target => target == targetName);
}
