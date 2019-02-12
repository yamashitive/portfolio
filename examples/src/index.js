import React from 'react';
import ReactDOM from 'react-dom'

import ItemSection from '../../src/ItemSection'
import '../../src/styles.css'

ReactDOM.render(
  <div className='container'>
    <h1 className='pageTitle'>PORTFOLIO</h1>
    <ItemSection
      image='pic1'
      label='アートラインかしわ'
      url='2018.kashiwa-art.com'
      term='2006年4月〜現在'
      description='新規ウェブサイト立ち上げ, 毎年、イベント毎にサイトを作成, 2014年からは、WordPressを使用して、誰でも、イベントプログラムを作成できるようにし工数を削減'
      phase='デザイン,設計,実装,運用'
      environment='WordPress, HTML5, CSS3(SCSS), PHP, jQuery'
      member='1人（本人）'
    />
    <ItemSection
      image='pic2'
      label='柏市市議会議員 山下洋輔'
      url='y-yamasita.com'
      term='2012年4月〜現在'
      description='2016年にリニューアル, 動画やPDFのコンテンツも簡単にアップロードできる'
      phase='デザイン,設計,実装,運用'
      environment='WordPress, HTML5, CSS3(SCSS), PHP, jQuery'
      member='1人（本人）'
    />
    <ItemSection
      image='pic3'
      label='野田市郷土博物館'
      url='noda-muse.or.jp'
      term='2007年4月〜現在'
      description='新規ウェブサイト立ち上げ, 2012年にリニューアル'
      phase='デザイン,設計,実装,運用'
      environment='WordPress, HTML5, CSS3(SCSS), PHP, jQuery'
      member='1人（本人）, 外部イラストレーター1人'
    />
    <ItemSection
      image='pic4'
      label='道の駅しょうなん'
      url='michinoeki-shonan.jp'
      term='2018年4月'
      description='新規ウェブサイト立ち上げ'
      phase='設計,実装'
      environment='WordPress, HTML5, CSS3(SCSS), PHP, jQuery'
      member='1人（本人）, 外部デザイナー1人'
    />
    <ItemSection
      image='pic5'
      label='吉野沢保育園'
      url='yoshinozawa.com'
      term='2018年6月'
      description='新規ウェブサイト立ち上げ'
      phase='設計,実装'
      environment='WordPress, HTML5, CSS3(SCSS), PHP, jQuery'
      member='1人（本人）, 外部デザイナー1人'
    />
    <ItemSection
      image='pic6'
      label='ART ROUND EAST'
      url='artroundeast.net'
      term='2013年4月〜現在'
      description='新規ウェブサイト立ち上げ, 2018年にリニューアル'
      phase='デザイン,設計,実装,運用'
      environment='WordPress, HTML5, CSS3(SCSS), PHP, jQuery'
      member='1人（本人）'
    />
    <ItemSection
      image='pic7'
      label='Nobless Oblige'
      url='nbob.jp'
      term='2013年4月〜現在'
      description='新規ウェブサイト立ち上げ, イメージ写真のディレクション, ロゴ、会員カード作成'
      phase='デザイン,設計,実装,運用'
      environment='WordPress, HTML5, CSS3(SCSS), PHP, jQuery'
      member='1人（本人）, 外部カメラマン1人'
    />
    <ItemSection
      image='pic8'
      label='流山市市長 井崎義治'
      url='izaki-yoshiharu.com'
      term='2013年4月〜2019年1月'
      description='新規ウェブサイト立ち上げ, ウェブデザイン未経験のデザイナーの方にウェブデザインのレクチャー'
      phase='設計,実装,運用'
      environment='WordPress, HTML5, CSS3(SCSS), PHP, jQuery'
      member='1人（本人）, 外部デザイナー1人'
    />

    <ItemSection
      image='pic9'
      label='U建築企画'
      url='yu-kikaku.com'
      term='2008年4月〜現在'
      description='Flashのタイムライン機能を使いつつAS2.0で作成'
      phase='デザイン,設計,実装,運用'
      environment='ActionScript2.0'
      member='1人（本人）'
    />
  </div>
  ,
  document.getElementById('root')
)