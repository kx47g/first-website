let defaultPosition = []

document.addEventListener('DOMContentLoaded', () => {
  for (const $e of document.getElementsByClassName('number-button')) {
    $e.addEventListener('click', () => {
      console.log('Clicked',$e.id);
      //全てのボタンを認識させる
      const btn = document.getElementById($e.id);
      const btn0 = document.getElementById('number-brank');
      const btn1 = document.getElementById('number-1');
      const btn2 = document.getElementById('number-2');
      const btn3 = document.getElementById('number-3');
      const btn4 = document.getElementById('number-4');
      const btn5 = document.getElementById('number-5');
      const btn6 = document.getElementById('number-6');
      const btn7 = document.getElementById('number-7');
      const btn8 = document.getElementById('number-8');
      const btn9 = document.getElementById('number-9');
      const btn10 = document.getElementById('number-10');
      const btn11 = document.getElementById('number-11');
      const btn12 = document.getElementById('number-12');
      const btn13 = document.getElementById('number-13');
      const btn14 = document.getElementById('number-14');
      const btn15 = document.getElementById('number-15');
      const btnreset = document.getElementById('reset-button');

      //パズルをクリックで移動させるためのスタイルの定義
      element = btn0
      style = element.currentStyle || document.defaultView.getComputedStyle(element, '');
      element2 = btn;
      style2 = element2.currentStyle || document.defaultView.getComputedStyle(element2, '');
      
      //シャッフルとクリア判定のためにスタイルを定義
      element_1 = btn1
      style_1 = element.currentStyle || document.defaultView.getComputedStyle(element_1, '');
      element_22 = btn2
      style_22 = element.currentStyle || document.defaultView.getComputedStyle(element_22, '');
      element_3 = btn3
      style_3 = element.currentStyle || document.defaultView.getComputedStyle(element_3, '');
      element_4 = btn4
      style_4 = element.currentStyle || document.defaultView.getComputedStyle(element_4, '');
      element_5 = btn5
      style_5 = element.currentStyle || document.defaultView.getComputedStyle(element_5, '');
      element_6 = btn6
      style_6 = element.currentStyle || document.defaultView.getComputedStyle(element_6, '');      
      element_7 = btn7
      style_7 = element.currentStyle || document.defaultView.getComputedStyle(element_7, '');
      element_8 = btn8
      style_8 = element.currentStyle || document.defaultView.getComputedStyle(element_8, '');
      element_9 = btn9
      style_9 = element.currentStyle || document.defaultView.getComputedStyle(element_9, '');
      element_10 = btn10
      style_10 = element.currentStyle || document.defaultView.getComputedStyle(element_10, '');
      element_11 = btn11
      style_11 = element.currentStyle || document.defaultView.getComputedStyle(element_11, '');
      element_12 = btn12
      style_12 = element.currentStyle || document.defaultView.getComputedStyle(element_12, '');     
      element_13 = btn13
      style_13 = element.currentStyle || document.defaultView.getComputedStyle(element_13, '');
      element_14 = btn14
      style_14 = element.currentStyle || document.defaultView.getComputedStyle(element_14, '');     
      element_15 = btn15
      style_15 = element.currentStyle || document.defaultView.getComputedStyle(element_15, '');

      save = style2.top;
      save2 = style2.left;

      //シャッフル処理のために各パズルの初期位置を取得
      defaultPosition = [
        { top: style_1.top, left: style_1.left},
        { top: style_22.top, left: style_22.left},
        { top: style_3.top, left: style_3.left},
        { top: style_4.top, left: style_4.left},
        { top: style_5.top, left: style_5.left},
        { top: style_6.top, left: style_6.left},
        { top: style_7.top, left: style_7.left},
        { top: style_8.top, left: style_8.left},
        { top: style_9.top, left: style_9.left},
        { top: style_10.top, left: style_10.left},
        { top: style_11.top, left: style_11.left},
        { top: style_12.top, left: style_12.left},
        { top: style_13.top, left: style_13.left},
        { top: style_14.top, left: style_14.left},
        { top: style_15.top, left: style_15.left},
        { top: style.top, left: style.left}
      ]
      console.log(defaultPosition)

      //クリア処理　ボタンが正しい位置にあればコンソールにクリアメッセージを表示
      //パズル全体の色をオレンジに変更
      if (parseInt(style_1.top, 10) == 50 & parseInt(style_1.left, 10) == 10 &&
          parseInt(style_22.top, 10) == 50 & parseInt(style_22.left, 10) == 112 &&
          parseInt(style_3.top, 10) == 50 & parseInt(style_3.left, 10) == 214 &&
          parseInt(style_4.top, 10) == 50 & parseInt(style_4.left, 10) == 316 &&
          parseInt(style_5.top, 10) == 152 & parseInt(style_5.left, 10) == 10 &&
          parseInt(style_6.top, 10) == 152 & parseInt(style_6.left, 10) == 112 &&
          parseInt(style_7.top, 10) == 152 & parseInt(style_7.left, 10) == 214 &&
          parseInt(style_8.top, 10) == 152 & parseInt(style_8.left, 10) == 316 &&
          parseInt(style_9.top, 10) == 254 & parseInt(style_9.left, 10) == 10 &&
          parseInt(style_10.top, 10) == 254 & parseInt(style_10.left, 10) == 112 &&
          parseInt(style_11.top, 10) == 254 & parseInt(style_11.left, 10) == 214 &&
          parseInt(style_12.top, 10) == 254 & parseInt(style_12.left, 10) == 316 &&
          parseInt(style_13.top, 10) == 356 & parseInt(style_13.left, 10) == 10 &&
          parseInt(style_14.top, 10) == 356 & parseInt(style_14.left, 10) == 112 &&
          parseInt(style_15.top, 10) == 356 & parseInt(style_15.left, 10) == 214 &&
          parseInt(style2.top, 10) == 356 & parseInt(style2.left, 10) == 316 )
          {
            console.log('ゲームクリア!おめでとう!');
            btn0.style.backgroundColor = 'orange';
            btn1.style.backgroundColor = 'orange';
            btn2.style.backgroundColor = 'orange';
            btn3.style.backgroundColor = 'orange';
            btn4.style.backgroundColor = 'orange';
            btn5.style.backgroundColor = 'orange';
            btn6.style.backgroundColor = 'orange';
            btn7.style.backgroundColor = 'orange';
            btn8.style.backgroundColor = 'orange';
            btn9.style.backgroundColor = 'orange';
            btn10.style.backgroundColor = 'orange';
            btn11.style.backgroundColor = 'orange';
            btn12.style.backgroundColor = 'orange';
            btn13.style.backgroundColor = 'orange';
            btn14.style.backgroundColor = 'orange';
            btn15.style.backgroundColor = 'orange';
          }

          //クリア条件を満たしていない時はパズルの色は通常のまま
          else
          {
            btn0.style.backgroundColor = 'black';
            btn1.style.backgroundColor = 'lightpink';
            btn2.style.backgroundColor = 'lightpink';
            btn3.style.backgroundColor = 'lightpink';
            btn4.style.backgroundColor = 'lightpink';
            btn5.style.backgroundColor = 'lightpink';
            btn6.style.backgroundColor = 'lightpink';
            btn7.style.backgroundColor = 'lightpink';
            btn8.style.backgroundColor = 'lightpink';
            btn9.style.backgroundColor = 'lightpink';
            btn10.style.backgroundColor = 'lightpink';
            btn11.style.backgroundColor = 'lightpink';
            btn12.style.backgroundColor = 'lightpink';
            btn13.style.backgroundColor = 'lightpink';
            btn14.style.backgroundColor = 'lightpink';
            btn15.style.backgroundColor = 'lightpink';
          }

      //シャッフル処理
      if ( (parseInt(style2.left, 10) == 418) )
      {
        shuffle_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] //空リストの作成
        shuffle_list = _.shuffle(shuffle_list); //２回シャッフルする
        shuffle_list = _.shuffle(shuffle_list);
        console.log(shuffle_list)
        //あらかじめ取得した初期位置と乱数のリストを参照してシャッフル
        btn0.style.top = defaultPosition[shuffle_list[0]].top;
        btn0.style.left = defaultPosition[shuffle_list[0]].left;
        btn1.style.top = defaultPosition[shuffle_list[1]].top;
        btn1.style.left = defaultPosition[shuffle_list[1]].left;
        btn2.style.top = defaultPosition[shuffle_list[2]].top;
        btn2.style.left = defaultPosition[shuffle_list[2]].left;
        btn3.style.top = defaultPosition[shuffle_list[3]].top;
        btn3.style.left = defaultPosition[shuffle_list[3]].left;
        btn4.style.top = defaultPosition[shuffle_list[4]].top;
        btn4.style.left = defaultPosition[shuffle_list[4]].left;
        btn5.style.top = defaultPosition[shuffle_list[5]].top;
        btn5.style.left = defaultPosition[shuffle_list[5]].left;
        btn6.style.top = defaultPosition[shuffle_list[6]].top;
        btn6.style.left = defaultPosition[shuffle_list[6]].left;
        btn7.style.top = defaultPosition[shuffle_list[7]].top;
        btn7.style.left = defaultPosition[shuffle_list[7]].left;
        btn8.style.top = defaultPosition[shuffle_list[8]].top;
        btn8.style.left = defaultPosition[shuffle_list[8]].left;
        btn9.style.top = defaultPosition[shuffle_list[9]].top;
        btn9.style.left = defaultPosition[shuffle_list[9]].left;
        btn10.style.top = defaultPosition[shuffle_list[10]].top;
        btn10.style.left = defaultPosition[shuffle_list[10]].left;
        btn11.style.top = defaultPosition[shuffle_list[11]].top;
        btn11.style.left = defaultPosition[shuffle_list[11]].left;
        btn12.style.top = defaultPosition[shuffle_list[12]].top;
        btn12.style.left = defaultPosition[shuffle_list[12]].left;
        btn13.style.top = defaultPosition[shuffle_list[13]].top;
        btn13.style.left = defaultPosition[shuffle_list[13]].left;
        btn14.style.top = defaultPosition[shuffle_list[14]].top;
        btn14.style.left = defaultPosition[shuffle_list[14]].left;
        btn15.style.top = defaultPosition[shuffle_list[15]].top;
        btn15.style.left = defaultPosition[shuffle_list[15]].left;
      }

      //パズルの移動処理、マウスで移動させたいパズルをクリックする。
      if 
        //上下１マス 左右１マス の斜め移動を禁止
        ((!((parseInt(style2.top, 10) - parseInt(style.top, 10))**2 == 10404 && 
        (parseInt(style2.left, 10) - parseInt(style.left, 10))**2 == 10404)) &&
        //上下１マス 左右２マス の斜め移動を禁止
        (!((parseInt(style2.top, 10) - parseInt(style.top, 10))**2 == 10404 && 
        (parseInt(style2.left, 10) - parseInt(style.left, 10))**2 == 41616)) &&
        //上下２マス 左右１マス の斜め移動を禁止
        (!((parseInt(style2.top, 10) - parseInt(style.top, 10))**2 == 41616 && 
        (parseInt(style2.left, 10) - parseInt(style.left, 10))**2 == 10404)) &&
        //上下１マス 左右３マス の斜め移動を禁止
        (!((parseInt(style2.top, 10) - parseInt(style.top, 10))**2 == 10404 && 
        (parseInt(style2.left, 10) - parseInt(style.left, 10))**2 == 93636)) &&
        //上下３マス 左右１マス の斜め移動を禁止
        (!((parseInt(style2.top, 10) - parseInt(style.top, 10))**2 == 93636 && 
        (parseInt(style2.left, 10) - parseInt(style.left, 10))**2 == 10404)) &&
        (!((parseInt(style2.left, 10) == 418))) &&
        //移動可能
        ((parseInt(style2.top, 10) - parseInt(style.top, 10))**2 == 10404 || 
        (parseInt(style2.left, 10) - parseInt(style.left, 10))**2 == 10404)) {
        btn.style.top = style.top;
        btn.style.left = style.left;
        btn0.style.top = save;
        btn0.style.left = save2;
      }
      else 
      //コンソールにエラーテキストを表示
      {
        console.log('その場所には移動できません!');
      }
    });
  }
});    
