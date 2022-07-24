type MsgCommand = 'INTERACT_WORD'
| 'DANMU_MSG' // 弹幕信息
| 'ROOM_REAL_TIME_MESSAGE_UPDATA' // 有关注人数
| 'WATCHED_CHANGE' // 观看人数
| 'ENTRY_EFFECT' // 欢迎舰长进入直播间
| 'WELCOME' // 欢迎xxx进入直播间
| 'WELCOME_GUARD' // 欢迎xxx进入直播间
| 'SEND_GIFT' // 礼物
| 'COMBO_SEND' // 连击
| 'SUPER_CHAT_MESSAGE' // sc
| 'SUPER_CHAT_MESSAGE_JPN'
| 'GUARD_BUY' // 上舰长
| 'USER_TOAST_MSG' // 续费舰长

interface MessageType {
  cmd: MsgCommand
}

interface DanmakuMessage extends MessageType {
  cmd: 'DANMU_MSG'
  info: [
    config: [
      n0: number,
      n1: number,
      n2: number,
      n3: number,
      n4: number,
      n5: number,
      n6: number,
      n7: string,
      n8: number,
      perhapsLottery: number, // 如果是抽奖弹幕，这个值不是 0
      n10: number,
      n11: any,
      n12: any,
      n13: string | {
        bulge_display: number
        emoticon_unique: string
        height: number
        in_player_area: number
        is_dynamic: number
        url: string
        width: number
      },
      n14: any,
    ],
    content: string,
    userInfo: [uid: number, uname: string, n2: number, n3: number, n4: number, n5: number, n6: number, color: string],
    label: [level: number, label: string, extLabel: string],
    rank: Array<any>,
    title: [string, string],
    n6: number,
    perhapsDuard: number, // 不为 0 是舰长
    n8: any,
    timestamp: { ts: number; ct: string },
  ]
}

interface WatchedMessage extends MessageType {
  cmd: 'WATCHED_CHANGE'
  data: {
    num: number
  }
}

interface SubscriberMessage extends MessageType {
  cmd: 'ROOM_REAL_TIME_MESSAGE_UPDATA'
  data: {
    fans: number
    fans_club: number
    roomid: number
    red_notice: number
  }
}

interface SendGiftMessage extends MessageType {
  cmd: 'SEND_GIFT'
  data: {
    face: string // 头像地址
    giftType: number
    timestamp: number
    coin_type: 'gold' | 'silver'
    uid: number
    uname: string
    giftName: string
    num: number
    total_coin: number
    giftId: number
    action: string
  }
}

interface GuardBuyMessage extends MessageType {
  cmd: 'GUARD_BUY'
  data: {
    uid: number
    username: string
    gift_name: string
    num: number
    price: number
    guard_level: number
  }
}

interface SuperChatMessage extends MessageType {
  cmd: 'SUPER_CHAT_MESSAGE_JPN'
  data: {
    uid: number
    user_info: {
      uname: string
      face: string
    }
    price: number
    message_jpn: string
    message: string
  }
}

interface WelcomeGuardMessage extends MessageType {
  cmd: 'WELCOME_GUARD'
  data: {
    uid: number
    username: string
    guard_level: number
  }
}

interface InteractiveWordMessage extends MessageType {
  cmd: 'INTERACT_WORD'
  data: {
    contribution: {
      grade: number
    }
    identities: [number]
    is_spread: number
    msg_type: number
    roomid: number
    uid: string
    uname: string
    uname_color: string
  }
}

interface ComboSendMessage extends MessageType {
  cmd: 'COMBO_SEND'
  data: {
    gift_id: number
    gift_name: string
    gift_nun: string
    is_show: number
    uid: number
    uname: string
    action: string
    batch_combo_id: string
    batch_combo_num: number
    combi_id: string
    combo: number
    combo_total_coin: number
  }
}

export type {
  MsgCommand,
  DanmakuMessage,
  WatchedMessage,
  SubscriberMessage,
  SendGiftMessage,
  GuardBuyMessage,
  SuperChatMessage,
  WelcomeGuardMessage,
  InteractiveWordMessage,
  ComboSendMessage,
}