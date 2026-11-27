# Bilibili 移除遮罩 (Bilibili No Mask)

移除 Bilibili 影片播放器上的模糊遮罩(`web-player-module-area-mask-panel`),讓你擁有完整的觀看體驗。

> 非 Bilibili 官方擴充功能。不收集任何資料,不需要額外權限。

## 安裝教學(Chrome / Edge / Firefox)

### 步驟 1:下載

到 [Releases 頁面](../../releases/latest) 下載 `bilibili-no-mask-v1.1.0.zip`。

### 步驟 2:解壓縮

對 zip 按右鍵 →「解壓縮全部」,放在一個**不會被刪掉的固定位置**(例如 `D:\extensions\bilibili-no-mask`)。
安裝後不要移動或刪除這個資料夾,否則擴充功能會失效。

### 步驟 3:開啟開發人員模式並載入

#### Chrome

1. 在網址列輸入 `chrome://extensions` 並按 Enter。
2. 打開右上角的 **「開發人員模式」** 開關。
3. 按左上角的 **「載入未封裝項目」**。
4. 選擇剛剛解壓縮出來的資料夾(裡面要看得到 `manifest.json`)。
5. 清單中出現「Bilibili 移除遮罩」就安裝完成。

#### Edge

1. 在網址列輸入 `edge://extensions` 並按 Enter。
2. 打開左側欄(或頁面底部)的 **「開發人員模式」** 開關。
3. 按上方出現的 **「載入解壓縮」**(英文介面為 Load unpacked)。
4. 選擇剛剛解壓縮出來的資料夾(裡面要看得到 `manifest.json`)。
5. 清單中出現「Bilibili 移除遮罩」就安裝完成。

> Edge 若跳出「來自未知來源的擴充功能」之類的警告,選擇保留即可。

#### Firefox(115 以上)

1. 在網址列輸入 `about:debugging#/runtime/this-firefox` 並按 Enter。
2. 按 **「載入暫時性附加元件⋯」**(Load Temporary Add-on)。
3. 選擇解壓縮資料夾內的 `manifest.json`。
4. 清單中出現「Bilibili 移除遮罩」就安裝完成。

> ⚠️ Firefox 的暫時性附加元件在**關閉瀏覽器後會消失**,下次開啟需要重新載入。
> 若要長期使用,需使用 [Firefox Developer Edition / Nightly](https://www.mozilla.org/firefox/channel/desktop/)
> 並在 `about:config` 將 `xpinstall.signatures.required` 設為 `false`,再從 `about:addons` →
> 齒輪 →「從檔案安裝附加元件」安裝 zip;或等待上架 Firefox Add-ons(AMO)後的已簽署版本。
> 一般版 Firefox 無法永久安裝未簽署的擴充功能。

### 步驟 4:使用

重新整理(F5)任何 Bilibili 影片頁即可。擴充功能會自動運作,不需要任何操作。

## 常見問題

**Chrome 每次開啟都跳「停用開發人員模式擴充功能」?**
這是 Chrome 對未上架商店之擴充功能的固定提示。點「×」關閉,或選「保留」即可,不影響功能。

**遮罩還是在?**
先確認已重新整理頁面,並在 `chrome://extensions`(Edge 為 `edge://extensions`,Firefox 為 `about:debugging` 按「重新載入」)按擴充功能上的重新整理圖示。若仍有問題,請到 [Issues](../../issues) 回報,並附上遮罩元素的原始碼(F12 → 點元素 → 右鍵 Copy → Copy outerHTML)。

**如何更新?**
下載新版 zip,覆蓋舊資料夾內的檔案,再到 `chrome://extensions` 按重新整理圖示。

**如何移除?**
在 `chrome://extensions`(Edge:`edge://extensions`)按擴充功能的「移除」;Firefox 在 `about:addons` 移除,暫時性附加元件重開瀏覽器即消失。

## 運作原理

- `content.css`:頁面載入時立即隱藏遮罩,避免閃現。
- `content.js`:用 MutationObserver 監看頁面,遮罩一出現就移除節點。
- 只在 `*.bilibili.com` 執行。
- 純 DOM 操作、未使用任何 `chrome.*` / `browser.*` API,因此同一份程式碼可同時用於 Chromium 系(Chrome、Edge)與 Firefox(manifest 內的 `browser_specific_settings` 供 Firefox 使用,Chrome 會忽略)。

## 隱私

見 [PRIVACY.md](PRIVACY.md):不收集、不傳送任何資料。

## 授權

MIT
