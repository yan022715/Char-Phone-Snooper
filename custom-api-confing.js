import { generateRaw } from '../../../../script.js';

export async function generatePhoneData(charName, persona) {
    const prompt = `
    作为角色设定专家，请根据以下角色信息，生成该角色手机里的隐私数据。
    角色名: ${charName}
    角色性格/背景: ${persona}
    
    必须以纯 JSON 格式输出，不要包含任何 Markdown 标记或额外说明。结构如下：
    {
      "wechat": {
        "recent_chats": [
          {"name": "联系人A", "last_msg": "最后一条消息内容", "time": "10:30"}
        ]
      },
      "bank": {"balance": "10023.50", "recent_transactions": []},
      "notes": ["备忘录秘密1", "备忘录秘密2"]
    }
    `;

    try {
        const response = await generateRaw(prompt, true);
        const cleanJson = response.replace(/```json|```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (error) {
        console.error('[Phone Snooper] JSON 生成或解析失败:', error);
        return null;
    }
}
