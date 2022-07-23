# D4nm4ku

使用 Tauri 和 Vue 实现一个弹幕姬。

## 功能预想

### 弹幕部分

#### 弹幕

- 主要：用户头像，用户名，弹幕内容，礼物，人气
- 可选：用户等级，谁的舰长，是否为粉丝

#### 主播回复

- 主动输入回复
- 关键字触发回复
    - 使用队列存储，并通过关键字 Hash，不再回复一段时间内已经重复的内容（设置回复内容的 TTL ），过长的弹幕需要分段延迟回复

#### 扩展功能

- 醒目留言
- 可选：是否只显示付费礼物，礼物金额，礼物连击（可能稍微有一点问题，或许还是在队列里面写）
- 可选：语音播报（感谢xxx的礼物，关注主播，等等）
- 弹幕投票


