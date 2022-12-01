# 2022.12.25 彼記 網站架構概述

`上次更新：11/29 15:34`

此 markdown 檔用於紀錄關於網頁的大項資訊使用，以方便協作者了解這個 repository 裡面所設計的網頁的大致**運作機制**、**設計方式**為何。

其中大概有以下的幾個段落：

- [網頁修改範本](#section_1)
- [網頁關係樹](/linkedlist.md) <- 此段落遷移至另外的`.md`檔
- [某些機構設計](#section_3)
- [網頁調整表](/bugs.md) <- 此段落遷移至另外的`.md`檔


----

## 📒 網頁修改範本<a name = "section_1"></a>

此網站為幫助彼記活動之網站，其中主要的設計與機構擷取自以下幾個open source的github資源與網路上的網頁開發教學資源：

* 網頁整體layout與scrolling animation : [fimbo](https://github.com/imfunniee/fimbo) by imfunniee on GitHub (此 GitHub repository 即是從此 repository fork 出來改的)。

<!-- * 方便的gradient背景 : [OnePagers-gradient](https://github.com/haydenryan/OnePagers-gradient) by hardenryan. -->

* 密碼保護的github網頁 : [protected-github-pages](https://github.com/chrissy-dev/protected-github-pages) by chrissy-dev on GitHub。

* 如何在網頁中插入modal image：[How To Create Modal Images](https://www.w3schools.com/howto/howto_css_modal_images.asp) on W3Schools。

此頁作者因為只學了一點點`html, css`，在程式碼上皆是以上面三個網站湊在一起，進行多次微調後試著組出一個符合教會活動需求的網站，因此對於這些程式碼本身的了解亦為有限。

如果是在機構上出現的bug，可能就會需要回到這些範本去尋找調整方式。

在下方[機構設計](#section_3)的介紹中引用到上面範本的地方會再標明出處。

----

## 📒 網頁關係樹<a name = "section_2"></a>

這段落的內容已經migrate到以下[網站設定表](linkedlist.md)。

----

## 📒 某些機構設計<a name = "section_3"></a>

*註：在此markdwon所在的資料夾（即主資料夾`main`）中，有一個名為`demo`的資料夾，其中即有相關的範例可以參考。*

網站中有幾個機構：密碼驗證、影片嵌入、圖片彈出、網頁跳轉動畫。這三個機構的方式在這個網站中的作法大致說明如下。

### 🌈 密碼驗證
此機構用於驗證彼記的玩家在關級中是否有正確解開謎底使用。若是解開的謎底正確，即可進入到影片瀏覽畫面觀賞影片。

此機構程式碼來自於[protected-github-pages](https://github.com/chrissy-dev/protected-github-pages)。

密碼驗證流程如下：
1. 玩家在所在網頁(某個資料夾中的`index.html`)的輸入欄位中輸入玩家所認為正確的密碼字串`s`，按下提交按鈕。
2. 網頁擷取玩家師入資訊(產生一個`onclick()`的事件)，使用SHA1的機制取得一個雜湊值`t`。
3. 在所在網頁的資料夾中尋找是否有名為`t`的資料夾。
4. 若是有，跳轉至這個資料夾中的`index.html`。若是沒有，顯示訊息提醒玩家輸入了錯誤的密碼。

註：如果把這個repository pull到自己的local machine上然後直接從自己的電腦上開啟密碼保護網頁，則這個機制無法使用。我也不知道為什麼，但總之就是只能在github上查看。

### 🌈 影片嵌入
影片嵌入出現在玩家解鎖謎題之後，即能親眼觀看彼得的回憶片段的時機。

影片嵌入的來源為拍攝組上傳於Google Drive上之剪輯片段，下載後上傳至YouTube上（權限設為非公開），從YouTube上取得嵌入碼（`html`語法中有關inline frame - `iframe`的函式）嵌入進網頁裡。

目前預設寬度大小為`300px`（多數智慧型手機之短邊長度皆能容納此大小），嵌入的選項中也儘量允許所有的功能（如全螢幕等等）。

使用YouTube嵌入的方式原因如下：GitHub因為允許網站大小上限不夠，無法全數上傳影片，所以需要透過嵌入的方式來作。Google Drive影片的嵌入碼皆是「預覽功能」的嵌入碼，若遇到影片大小太大/權限設定有誤則無法得到該嵌入碼，就算能取得在一些人的手機上也無法不透過另開視窗直接觀看。

### 🌈 圖片彈出
圖片彈出出現在提供玩家查看玩家指引卡的部份。圖片來源為道具組製作之玩家指引卡。此部份出現在玩家選擇路線之後的回憶大廳。

此機構程式碼來自於[How To Create Modal Images](https://www.w3schools.com/howto/howto_css_modal_images.asp)。裡面原來是以點選欲瀏覽圖片以使圖片彈出，在此網站中是以按鈕開啟彈出圖片來作。

其機構大致如下：

1. 創造一個蓋住整個畫面的黑色container，在其中有欲隱藏的圖片，以及一個叉叉按鍵。這些元素展開狀態的初始設定為不展開。
2. 當玩家點擊查看圖片的按鈕之後產生`onclick`事件，這個事件會更改前面這些元素展開狀態。
3. 當玩家點擊叉叉按鈕之後再將這些元素展開狀態設回去初始值。

### 🌈 網頁過場動畫
過場動畫主要已經在[fimbo](https://github.com/imfunniee/fimbo)這個repository中寫好直接使用。

重要的動畫效果主要有幾個：
1. 載入中會看到一個一直在自轉的圓圈。
2. 在回憶大廳中當畫面載入完成，會有一些橘色長方形往旁邊跑展示內頁內容。
3. 在主畫面、回憶大廳中載入完成後文字入場也有特效。
4. 圖片彈出與縮回來時也有動畫（這部份是[How To Create Modal Images](https://www.w3schools.com/howto/howto_css_modal_images.asp)中的內容）。

這些暫時沒有特別去研究。

----

## 📒 網頁調整表<a name = "section_4"></a>

請跳轉至以下連結：[點我](/bugs.md)