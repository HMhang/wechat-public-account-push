/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc955f44435006573',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4e55a0ac6fe5a5480dd4a3e0d5352fb8',

  PROVINCE: '河南',
  CITY: '驻马店',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyvLO6eHJUPKYAkhhSASvdMGd-sM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '8KB_apcVIutrJX5UBLCXynnS62XS5K6s3yGLpLRaGmk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-28',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1998', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1998', date: '11-28',
        },
        {
          type: '节日', name: '宝贝生日', year: '1998', date: '11-28',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-06' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '8KB_apcVIutrJX5UBLCXynnS62XS5K6s3yGLpLRaGmk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyvLO6cfCKM8FS_t6OyxPpErEalo',
    }
  ],

}

module.exports = USER_CONFIG

