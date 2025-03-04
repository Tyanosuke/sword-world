/**
 * 初期化
 */
window.onload = function() {
    // サイト選択
    selectSite();
}

// ====================================================================================================
// 定数・変数
// ====================================================================================================

/**
 * スクリプトモジュール
 */
let module;

// ====================================================================================================
// ファンクション
// ====================================================================================================

/**
 * ステータスの設定
 */
function setStatus(id, name, value, setMax = false) {
    document.getElementById("status_name_" + id).value = name;
    document.getElementById("status_value_" + id).value = value;

    if (setMax) {
        document.getElementById("status_max_" + id).value = value;
    }
}

// ====================================================================================================
// イベント
// ====================================================================================================

/**
 * 「サイト」リストボックス
 */
async function selectSite($this = null) {
    // --------------------------------------------------
    // 見た目切り替え
    // --------------------------------------------------

    if ($this == null) {
        $this = document.getElementById("select_site");
    }

    const id = $this.selectedOptions[0].id;
    let script = "";
    switch(id){
        // ●ゆとシート
        case "ytsheet":
            script = "script_yutosheet";
            break;
        // ●キャラクター保管所
        case "vampire-blood":
            script= "script_vampire";
            break;
    }

    // 各サイトごとの表示
    document.querySelectorAll('[class^="displayLimit_"]').forEach(target => {
        // ●IDが一致する場合
        if (target.classList.contains("displayLimit_" + id)) {
            // 表示
            target.classList.remove("hidden");
        }
        // ●それ以外の場合
         else {
            // 非表示
            target.classList.add("hidden");
        }
    });

    // --------------------------------------------------
    // スクリプトモジュール切り替え
    // --------------------------------------------------

    module = await import(`./${script}.js`);
}

/**
 * カテゴリーチェックボックス
 */
function toggleCategoryCheck($this) {
    // 今押したチェックボックスの状態
    const check = $this.checked;

    // 同カテゴリー内のチェックボックス（有効な行為判定のみ）を取得
    $this.parentElement.parentElement.querySelectorAll('*:not(.skillDisabled) > input[type="checkbox"]').forEach(taget => {
        // チェックボックス状態の同期
        taget.checked = check;
    });
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
    // 「注意」を閉じる
    // --------------------------------------------------

    document.getElementById("acordion_caution").classList.add("close");

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
        module.drawCharacterName(data);
        document.getElementById("loadCharacter").classList.remove("hidden");

        // ステータスの描画
        module.drawStatus(data);

        // カードの描画
        module.drawContents(data);

        // チャットパレットの生成
        outputChatPallet(false);

        // 出力エリアを表示
        document.querySelector(".output_area").classList.remove("hidden");

        // 「サイト」・「URL」入力欄を非活性
        document.getElementById("select_site").disabled = true;
        document.querySelector(":not(.hidden) > .input_url").disabled = true;

        // 「読み込み」ボタンを非表示
        document.getElementById("buttonRead").classList.add("hidden");

        // 「クリア」ボタンを表示
        document.getElementById("buttonClear").classList.remove("hidden");

        // エラーテキスト非表示
        document.getElementById("loadError").classList.add("hidden");
    })
    .catch(error => {
        console.dir(error);

        // エラーテキスト表示
        document.getElementById("loadError").classList.remove("hidden");

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
 * 「クリア」ボタン
 */
function buttonClear() {
    // セッションストレージのデータを削除
    sessionStorage.removeItem('data');

    // 「読み込みキャラクター」を非表示
    document.getElementById("loadCharacter").classList.add("hidden");

    // 出力エリアを表示
    document.querySelector(".output_area").classList.add("hidden");

    // 「サイト」・「URL」入力欄を活性
    document.getElementById("select_site").disabled = false;
    document.querySelector(":not(.hidden) > .input_url").disabled = false;

    // 「読み込み」ボタンを表示
    document.getElementById("buttonRead").classList.remove("hidden");

    // 「クリア」ボタンを非表示
    document.getElementById("buttonClear").classList.add("hidden");
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
        // チェックされていない場合、カテゴリーごとスキップ
        if (!category.querySelector('input[type="checkbox"]').checked) {
            return;
        }

        // 見出し出力
        text += "◆─── " + category.querySelector('.acordionTitleRow > h3').textContent + " ───◆";
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
                // - 首切り刀補正
                const bonusKubikiri = (weaponName.indexOf("首切り刀") > -1) ? "r5" : "";

                // 命中力
                // - 能力値ボーナス：名称
                const nameBonusHit = roll.querySelector(".card_skill.hit .valueBlock.bonus > .name").textContent;
                // - 能力値ボーナス：ボーナス修正
                let addValue = roll.querySelector(".card_skill.hit .valueBlock.add > .value").textContent;
                if (Number(addValue) == 0) {
                    addValue = "";
                }

                // ダメージ
                // - 威力
                const valueRate = roll.querySelector(".card_skill.damage .valueBlock.rate > .value").textContent;
                const valueRateAdd = roll.querySelector(".card_skill.damage .valueBlock.rate > .add").textContent;
                // - Ｃ値
                const valueCritical = Number(roll.querySelector(".card_skill.damage .valueBlock.critical > .value").textContent);
                const valueCriticalAdd = Number(roll.querySelector(".card_skill.damage .valueBlock.critical > .add").textContent);
                // - 能力値ボーナス：名称
                const nameBonusDamage = roll.querySelector(".card_skill.damage .valueBlock.bonus > .name").textContent;

                // チャットコマンドを生成
                // - 命中力
                text +=
                    "2d6+{" + nameSkill + "}+{" + nameBonusHit + "}+{命中力修正}" + addValue
                    + "　■" + weaponName + " - 命中力(" + nameSkill + "+" + nameBonusHit + ")\r";
                // - ダメージ
                text +=
                    "k" + valueRate + bonusKubikiri+ "@" + (valueCritical + valueCriticalAdd)
                    + "+{" + nameSkill + "}+{" + nameBonusDamage + "}+{ダメージ修正}" + valueRateAdd
                    + "　■" + weaponName + " - ダメージ(" + nameSkill + "+" + nameBonusDamage + ")\r";
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
                        "k" + valueRate +"@" + valueCritical + "+{" + nameSkill + "}+{" + nameBonus + "}+{ダメージ修正}"
                        + "　■威力:" + valueRate + "/C値:" + valueCritical +  "(" + nameSkill + "+" + nameBonus + ")\r";
                });
            }
            // ●行為判定
            else {
                // 行為判定
                const nameRoll = roll.querySelector(".rollName").textContent;

                // 能力値ボーナス
                const nameBonus = roll.querySelector('.valueBlock.bonus > .name').textContent;

                // 条件付き修正
                let valueAddName = "";
                const targetAddName = roll.querySelector('.valueBlock.add > .name');
                if (targetAddName) {
                    if (valueAddName != "") {
                        valueAddName += " ";
                    }
                    valueAddName += "※" + targetAddName.textContent;
                }
                let valueAdd = "";
                const targetAdd = roll.querySelector('.valueBlock.add > .value');
                if (targetAdd) {
                    valueAdd = targetAdd.textContent;
                    if (valueAdd >= 1) {
                        valueAdd = "+" + valueAdd;
                    }
                }

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

                    // 条件
                    const nameCondition = skill.querySelector('.condition:not(.alert)');
                    if (nameCondition) {
                        if (valueAddName != "") {
                            valueAddName += " ";
                        }
                        valueAddName += "※" + nameCondition.textContent;
                    }

                    // 回避
                    let addDodge = "";
                    if (typeDodge) {
                        addDodge = "+{回避力修正}";
                    }

                    // チャットコマンドを生成
                    if (!skill.classList.contains("flat")) {
                        text +=
                            "2d6+{" + nameSkill + "}+{" + nameBonus + "}" + addDodge + valueAdd
                            + "　■" + nameRoll + "(" + nameSkill + "+" + nameBonus + ")"  + valueAddName + "\r";
                    } else {
                        // チャットコマンドを生成
                        text += "2d6" + valueAdd + "　■" + nameRoll + "(平目)"  + valueAddName + "\r";
                    }
                });
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
    let url = document.querySelector(':not(.hidden) > .urlPrefix').textContent + document.querySelector(':not(.hidden) > .input_url').value;

    if (json) {
        url += document.querySelector(":not(.hidden) > .urlSuffix").textContent;
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
