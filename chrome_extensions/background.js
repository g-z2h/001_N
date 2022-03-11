// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener((text) => {
    // Encode user input for special characters , / ? : @ & = + $ #
    var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
    chrome.tabs.create({ url: newURL });
});

//一覧画面遷移
window.onload = function () {
    document.getElementById("list-js").onclick = function () {
        var listURL = 'http://127.0.0.1:3000/api/v1/user/stumblings/';
        chrome.tabs.create({ url: listURL });
    };

    var url = "http://127.0.0.1:3000/api/v1/user/stumblings/searching/";
    fetch(url) //ユーザ情報を認識する
        .then(function (res) {
            return res.json();
        })
        .then(function (jsonData) {
            console.log(jsonData);
    })

    const getButton = document.getElementById('get-js')
    const postText = document.getElementById('post-text')
    const postButton = document.getElementById('post-js')
    const resHtml = document.getElementById('res-js')
    let searching;

    var post_url = "http://127.0.0.1:3000/api/v1/user/stumblings/";
    postButton.onclick = function (res) { //新規作成は確認　search_keyにテキスト保存まだ
        let params = {method: 'POST',headers: {'Content-type': 'application/json;charset=utf-8'},body: JSON.stringify({search_key: postText.value})};
        fetch(post_url, params)
        .then(function (res) {
            return res.json();
        })
        .then(res => res.text())

    }




//var url2 = `http://127.0.0.1:3000/api/v1/user/stumblings/${searching.id}`;


};