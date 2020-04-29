import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Idiom} from "../models/Idiom";
import {Difficulty} from "../models/Difficulty";

@Injectable({
  providedIn: 'root'
})
export class IdiomsService {
  idioms = new Array<Idiom>();

  constructor() {
    this.idioms.push(
      new Idiom('爱不释手','ài bù shì shǒu'),
      new Idiom('按部就班','àn bù jiù bān'),
      new Idiom('百折不挠','bǎi zhé bù náo'),
      new Idiom('半途而废','bàn tú ér fèi'),
      new Idiom('包罗万象','bāo luó wàn xiàng'),
      new Idiom('变本加厉','biàn běn jiā lì'),
      new Idiom('别出心裁','bié chū xīn cái'),
      new Idiom('宾至如归','bīn zhì rú guī'),
      new Idiom('不可救药','bù kě jiù yào'),
      new Idiom('不劳而获','bù láo ér huò'),
      new Idiom('不务正业','bù wù zhèng yè'),
      new Idiom('不省人事','bù xǐng rén shì'),
      new Idiom('不遗余力','bù yí yú lì'),
      new Idiom('不择手段','bù zé shǒu duàn'),
      new Idiom('不自量力','bù zì liàng lì'),
      new Idiom('长年累月','cháng nián lèi yuè'),
      new Idiom('趁火打劫','chèn huǒ dǎ jié'),
      new Idiom('愁眉不展','chóu méi bù zhǎn'),
      new Idiom('川流不息','chuān liú bù xī'),
      new Idiom('唇亡齿寒','chún wáng chǐ hán'),
      new Idiom('从容不迫','cóng róng bù pò'),
      new Idiom('措手不及','cuò shǒu bù jí'),
      new Idiom('打草惊蛇','dǎ cǎo jīng shé'),
      new Idiom('大刀阔斧','dà dāo kuò fǔ'),
      new Idiom('大公无私','dà gōng wú sī'),
      new Idiom('道听途说','dào tīng tú shuō'),
      new Idiom('得意忘形','dé yì wàng xíng'),
      new Idiom('对牛弹琴','duì niú tán qín'),
      new Idiom('发扬光大','fā yáng guāng dà'),
      new Idiom('奋不顾身','fèn bù gù shēn'),
      new Idiom('奉公守法','fèng gōng shǒu fǎ'),
      new Idiom('各有千秋','gè yǒu qiān qiū'),
      new Idiom('光明正大','guāng míng zhèng dà'),
      new Idiom('海底捞针','hǎi dǐ lāo zhēn'),
      new Idiom('好逸恶劳','hào yì wù láo'),
      new Idiom('和睦共处','hé mù gòng chǔ'),
      new Idiom('狐假虎威','hú jiǎ hǔ wēi'),
      new Idiom('胡思乱想','hú sī luàn xiǎng'),
      new Idiom('胡作非为','hú zuò fēi wéi'),
      new Idiom('花言巧语','huā yán qiǎo yǔ'),
      new Idiom('画蛇添足','huà shé tiān zú'),
      new Idiom('家喻户晓','jiā yù hù xiǎo'),
      new Idiom('见利忘义','jiàn lì wàng yì'),
      new Idiom('津津有味','jīn jīn yǒu wèi'),
      new Idiom('进退两难','jìn tuì liǎng nán'),
      new Idiom('井井有条','jǐng jǐng yǒu tiáo'),
      new Idiom('刻苦耐劳','kè kǔ nài láo'),
      new Idiom('口是心非','kǒu shì xīn fēi'),
      new Idiom('苦口婆心','kǔ kǒu pó xīn'),
      new Idiom('理直气壮','lǐ zhí qì zhuàng'),
      new Idiom('力不从心','lì bù cóng xīn'),
      new Idiom('了如指掌','liǎo rú zhǐ zhǎng'),
      new Idiom('路不拾遗','lù bù shí yí'),
      new Idiom('落花流水','luò huā liú shuǐ'),
      new Idiom('慢条斯理','màn tiáo sī lǐ'),
      new Idiom('面目全非','miàn mù quán fēi'),
      new Idiom('明目张胆','míng mù zhāng dǎn'),
      new Idiom('默守成规','mò shǒu chéng guī'),
      new Idiom('普天同庆','pǔ tiān tóng qìng'),
      new Idiom('千篇一律','qiān piān yī lǜ'),
      new Idiom('情同手足','qíng tóng shǒu zú'),
      new Idiom('人云亦云','rén yún yì yún'),
      new Idiom('荣华富贵','róng huá fù guì'),
      new Idiom('三思而行','sān sī ér xíng'),
      new Idiom('僧多粥少','sēng duō zhōu shǎo'),
      new Idiom('舍己为人','shě jǐ wèi rén'),
      new Idiom('事半功倍','shì bàn gōng bèi'),
      new Idiom('视死如归','shì sǐ rú guī'),
      new Idiom('守望相助','shǒu wàng xiāng zhù'),
      new Idiom('守株待兔','shǒu zhū dài tù'),
      new Idiom('熟能生巧','shú néng shēng qiǎo'),
      new Idiom('水落石出','shuǐ luò shí chū'),
      new Idiom('似是而非','sì shì ér fēi'),
      new Idiom('滔滔不绝','tāo tāo bù jué'),
      new Idiom('提心吊胆','tí xīn diào dǎn'),
      new Idiom('同甘共苦','tóng gān gòng kǔ'),
      new Idiom('投机取巧','tóu jī qǔ qiǎo'),
      new Idiom('图劳无功','tú láo wú gōng'),
      new Idiom('望尘莫及','wàng chén mò jí'),
      new Idiom('忘恩负义','wàng ēn fù yì'),
      new Idiom('为非作歹','wéi fēi zuò dǎi'),
      new Idiom('无微不至','wú wēi bù zhì'),
      new Idiom('相安无事','xiāng ān wú shì'),
      new Idiom('心灰意懒','xīn huī yì lǎn'),
      new Idiom('兴高采烈','xìng gāo cǎi liè'),
      new Idiom('袖手旁观','xiù shǒu páng guān'),
      new Idiom('鸦雀无声','yā què wú shēng'),
      new Idiom('言行一致','yán xíng yī zhì'),
      new Idiom('一败涂地','yī bài tú dì'),
      new Idiom('一帆风顺','yī fān fēng shùn'),
      new Idiom('一视同仁','yī shì tóng rén'),
      new Idiom('一事无成','yī shì wú chéng'),
      new Idiom('以卵击石','yǐ luǎn jī shí'),
      new Idiom('以身作则','yǐ shēn zuò zé'),
      new Idiom('易如反掌','yì rú fǎn zhǎng'),
      new Idiom('饮水思源','yǐn shuǐ sī yuán'),
      new Idiom('迎刃而解','yíng rèn ér jiě'),
      new Idiom('有勇无谋','yǒu yǒng wú móu'),
      new Idiom('执迷不悟','zhí mí bù wù'),
      new Idiom('趾高气扬','zhǐ gāo qì yáng'),
      new Idiom('纸上谈兵','zhǐ shàng tán bīng'),
      new Idiom('志同道合','zhì tóng dào hé'),
      new Idiom('置之不理','zhì zhī bù lǐ'),
      new Idiom('装聋作哑','zhuāng lóng zuò yǎ'),
      new Idiom('自暴自弃','zì bào zì qì'),
      new Idiom('自力更生','zì lì gēng shēng'),
      new Idiom('坐井观天','zuò jǐng guān tiān'),
      new Idiom('爱屋及乌','ài wū jí wū'),
      new Idiom('百年树人','bǎi nián shù rén'),
      new Idiom('班门弄斧','bān mén nòng fǔ'),
      new Idiom('标新立异','biāo xīn lì yì'),
      new Idiom('重蹈覆辙','chóng dǎo fù zhé'),
      new Idiom('德高望重','dé gāo wàng zhòng'),
      new Idiom('耳濡目染','ěr rú mù rǎn'),
      new Idiom('风驰电掣','fēng chí diàn chè'),
      new Idiom('凤毛麟角','fèng máo lín jiǎo'),
      new Idiom('敷衍塞责','fū yǎn sè zé'),
      new Idiom('功亏一篑','gōng kuī yī kuì'),
      new Idiom('画龙点睛','huà lóng diǎn jīng'),
      new Idiom('居安思危','jū ān sī wēi'),
      new Idiom('开源节流','kāi yuán jié liú'),
      new Idiom('脍炙人口','kuài zhì rén kǒu'),
      new Idiom('明哲保身','míng zhé bǎo shēn'),
      new Idiom('潛移默化','qián yí mò huà'),
      new Idiom('束手无策','shù shǒu wú cè'),
      new Idiom('温故知新','wēn gù zhī xīn'),
      new Idiom('信口开河','xìn kǒu kāi hé'),
      new Idiom('忠言逆耳','zhōng yán nì ěr'),
      new Idiom('闭门造车','bì mén zào chē'),
      new Idiom('不耻下问','bù chǐ xià wèn'),
      new Idiom('不攻自破','bù gōng zì pò'),
      new Idiom('不可思议','bù kě sī yì'),
      new Idiom('不翼而飞','bù yì ér fēi'),
      new Idiom('出类拔萃','chū lèi bá cuì'),
      new Idiom('吹毛求疵','chuī máo qiú cī'),
      new Idiom('垂涎三尺','chuí xián sān chǐ'),
      new Idiom('从善如流','cóng shàn rú liú'),
      new Idiom('大言不惭','dà yán bù cán'),
      new Idiom('当机立断','dāng jī lì duàn'),
      new Idiom('得寸进尺','dé cùn jìn chǐ'),
      new Idiom('得过且过','dé guò qiě guò'),
      new Idiom('废寝忘食','fèi qǐn wàng shí'),
      new Idiom('改过自新','gǎi guò zì xīn'),
      new Idiom('高瞻远瞩','gāo zhān yuǎn zhǔ'),
      new Idiom('高枕无忧','gāo zhěn wú yōu'),
      new Idiom('隔岸观火','gé àn guān huǒ'),
      new Idiom('根深蒂固','gēn shēn dì gù'),
      new Idiom('钩心斗角','gōu xīn dòu jiǎo'),
      new Idiom('苟且偷安','gǒu qiě tōu ān'),
      new Idiom('孤陋寡闻','gū lòu guǎ wén'),
      new Idiom('孤掌难鸣','gū zhǎng nán míng'),
      new Idiom('孤注一掷','gū zhù yī zhì'),
      new Idiom('沽名钓誉','gū míng diào yù'),
      new Idiom('古色古香','gǔ sè gǔ xiāng'),
      new Idiom('拐弯抹角','guǎi wān mò jiǎo'),
      new Idiom('含辛茹苦','hán xīn rú kǔ'),
      new Idiom('好高骛远','hào gāo wù yuǎn'),
      new Idiom('挥金如土','huī jīn rú tǔ'),
      new Idiom('混水摸鱼','hùn shuǐ mō yú'),
      new Idiom('鸡犬不宁','jī quǎn bù níng'),
      new Idiom('集思广益','jí sī guǎng yì'),
      new Idiom('假公济私','jiǎ gōng jì sī'),
      new Idiom('见异思迁','jiàn yì sī qiān'),
      new Idiom('见义勇为','jiàn yì yǒng wéi'),
      new Idiom('捷足先登','jié zú xiān dēng'),
      new Idiom('精益求精','jīng yì qiú jīng'),
      new Idiom('鞠躬尽瘁','jū gōng jìn cuì'),
      new Idiom('举一反三','jǔ yī fǎn sān'),
      new Idiom('举足轻重','jǔ zú qīng zhòng'),
      new Idiom('开门见山','kāi mén jiàn shān'),
      new Idiom('慷慨解囊','kāng kǎi jiě náng'),
      new Idiom('滥竽充数','làn yú chōng shù'),
      new Idiom('老马识途','lǎo mǎ shí tú'),
      new Idiom('励精图治','lì jīng tú zhì'),
      new Idiom('临渴掘井','lín kě jué jǐng'),
      new Idiom('流离失所','liú lí shī suǒ'),
      new Idiom('络绎不绝','luò yì bù jué'),
      new Idiom('满载而归','mǎn zài ér guī'),
      new Idiom('毛遂自荐','máo suì zì jiàn'),
      new Idiom('每况愈下','měi kuàng yù xià'),
      new Idiom('明知故犯','míng zhī gù fàn'),
      new Idiom('目中无人','mù zhōng wú rén'),
      new Idiom('弄巧反拙','nòng qiǎo fǎn zhuō'),
      new Idiom('破釜沉舟','pò fǔ chén zhōu'),
      new Idiom('杞人忧天','qǐ rén yōu tiān'),
      new Idiom('千钧一发','qiān jūn yī fà'),
      new Idiom('千载难逢','qiān zǎi nán féng'),
      new Idiom('前车之鉴','qián chē zhī jiàn'),
      new Idiom('强词夺理','qiáng cí duó lǐ'),
      new Idiom('青出于蓝','qīng chū yú lán'),
      new Idiom('倾家荡产','qīng jiā dàng chǎn'),
      new Idiom('人浮于事','rén fú yú shì'),
      new Idiom('任劳任怨','rèn láo rèn yuàn'),
      new Idiom('如火如荼','rú huǒ rú tú'),
      new Idiom('如释重负','rú shì zhòng fù'),
      new Idiom('杀鸡取卵','shā jī qǔ luǎn'),
      new Idiom('手不释卷','shǒu bù shì juàn'),
      new Idiom('守口如瓶','shǒu kǒu rú píng'),
      new Idiom('水到渠成','shuǐ dào qú chéng'),
      new Idiom('顺手牵羊','shùn shǒu qiān yáng'),
      new Idiom('司空见惯','sī kōng jiàn guàn'),
      new Idiom('随遇而安','suí yù ér ān'),
      new Idiom('挑拨离间','tiǎo bō lí jiàn'),
      new Idiom('挺而走险','tǐng ér zǒu xiǎn'),
      new Idiom('同归于尽','tóng guī yú jìn'),
      new Idiom('同流合污','tóng liú hé wū'),
      new Idiom('同舟共济','tóng zhōu gòng jì'),
      new Idiom('推陈出新','tuī chén chū xīn'),
      new Idiom('未雨绸缪','wèi yǔ chóu móu'),
      new Idiom('无病呻吟','wú bìng shēn yín'),
      new Idiom('无动于衷','wú dòng yú zhōng'),
      new Idiom('五体投地','wǔ tǐ tóu dì'),
      new Idiom('息事宁人','xī shì níng rén'),
      new Idiom('相辅相成','xiāng fǔ xiāng chéng'),
      new Idiom('心旷神怡','xīn kuàng shén yí'),
      new Idiom('欣欣向荣','xīn xīn xiàng róng'),
      new Idiom('胸有成竹','xiōng yǒu chéng zhú'),
      new Idiom('栩栩如生','xǔ xǔ rú shēng'),
      new Idiom('悬崖勒马','xuán yá lè mǎ'),
      new Idiom('削足适履','xuē zú shì lǚ'),
      new Idiom('寻根究底','xún gēn jiū dǐ'),
      new Idiom('循循善诱','xún xún shàn yòu'),
      new Idiom('雅俗共赏','yǎ sú gòng shǎng'),
      new Idiom('养尊处优','yǎng zūn chǔ yōu'),
      new Idiom('摇摇欲坠','yáo yáo yù zhuì'),
      new Idiom('一见如故','yī jiàn rú gù'),
      new Idiom('一举两得','yī jǔ liǎng dé'),
      new Idiom('一蹶不振','yī jué bù zhèn'),
      new Idiom('一劳永逸','yī láo yǒng yì'),
      new Idiom('一落千丈','yī luò qiān zhàng'),
      new Idiom('一毛不拔','yī máo bù bá'),
      new Idiom('一目了然','yī mù liǎo rán'),
      new Idiom('一暴十寒','yī pù shí hán'),
      new Idiom('一网打尽','yī wǎng dǎ jìn'),
      new Idiom('一意孤行','yī yì gū xíng'),
      new Idiom('一针见血','yī zhēn jiàn xiě'),
      new Idiom('一知半解','yī zhī bàn jiě'),
      new Idiom('以牙还牙','yǐ yá huán yá'),
      new Idiom('异想天开','yì xiǎng tiān kāi'),
      new Idiom('应接不暇','yìng jiē bù xiá'),
      new Idiom('优柔寡断','yōu róu guǎ duàn'),
      new Idiom('游手好闲','yóu shǒu hào xián'),
      new Idiom('有目共睹','yǒu mù gòng dǔ'),
      new Idiom('与日俱增','yǔ rì jù zēng'),
      new Idiom('再接再厉','zài jiē zài lì'),
      new Idiom('蒸蒸日上','zhēng zhēng rì shàng'),
      new Idiom('真知灼见','zhēn zhī zhuó jiàn'),
      new Idiom('自投罗网','zì tóu luó wǎng'),
      new Idiom('自相矛盾','zì xiāng máo dùn'),
      new Idiom('坐享其成','zuò xiǎng qí chéng'),
    );
  }

    getIdioms(difficulty: Difficulty): Observable<Array<Idiom>> {
    const selectedIdioms = new Map<number, Idiom>();
      while (selectedIdioms.size !== difficulty.numOfIdioms) {
        let random = this.randomInteger(difficulty.startRange, difficulty.endRange);
        if(!selectedIdioms.has(random)) {
          selectedIdioms.set(random, this.idioms[random]);
        }
      }
      return of(Array.from(selectedIdioms.values()));
    }

    getDifficulties():Observable<Array<Difficulty>> {
      const difficulties = new Array<Difficulty>();
      difficulties.push(
        new Difficulty('easy', 4, 180,0, 79),
        new Difficulty('normal', 4, 120,80, 159),
        new Difficulty('hard', 6, 120, 160, 249),
      );
      return of(difficulties);
    }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
