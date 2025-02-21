/**
 * 初期化
 */
window.onload = function() {
}

/**
 * 「読み込み」ボタン
 */
async function onClickButtonRead() {
    const res1 = await fetch(document.querySelector('#input_url').value + "&mode=json");
    const res2 = await res1.json();
    console.dir(res2);
}

/**
 * 「開閉」ボタン
 */
async function toggleAcordion(targerId) {
    document.getElementById(targerId).classList.toggle("close");
}
