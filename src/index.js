document.addEventListener('DOMContentLoaded', () => {
  for (const $e of document.getElementsByClassName('number-button')) {
    $e.addEventListener('click', () => {
      console.log('Clicked',$e.id);
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


      element = btn0
      style = element.currentStyle || document.defaultView.getComputedStyle(element, '');
      element2 = btn;
      style2 = element2.currentStyle || document.defaultView.getComputedStyle(element2, '');
      
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
            btn1.style.backgroundColor = 'blue';
            btn2.style.backgroundColor = 'blue';
            btn3.style.backgroundColor = 'blue';
            btn4.style.backgroundColor = 'blue';
            btn5.style.backgroundColor = 'blue';
            btn6.style.backgroundColor = 'blue';
            btn7.style.backgroundColor = 'blue';
            btn8.style.backgroundColor = 'blue';
            btn9.style.backgroundColor = 'blue';
            btn10.style.backgroundColor = 'blue';
            btn11.style.backgroundColor = 'blue';
            btn12.style.backgroundColor = 'blue';
            btn13.style.backgroundColor = 'blue';
            btn14.style.backgroundColor = 'blue';
            btn15.style.backgroundColor = 'blue';
          }

      //シャッフル処理
      if ( (parseInt(style2.left, 10) == 418) )
      {
        console.log('リセットボタンが押されました');
        var shuffle_pazule_number;
        shuffle_pazule_number = parseInt(Math.random(0,2)*3, 10);
        console.log(shuffle_pazule_number);

        //リセットを押したとき、もしパターン0ならば、次の入れ替え処理を動かす。
        if (shuffle_pazule_number == 0){
          //パズルの 1 と 4 を入れ替え
          save = style_1.top;
          save2 = style_1.left;
          btn1.style.top = style_4.top;
          btn1.style.left = style_4.left;
          btn4.style.top = save;
          btn4.style.left = save2;
        }

        //リセットを押したとき、もしパターン1ならば、次の入れ替え処理を動かす。
        if (shuffle_pazule_number == 1){
          save = style_3.top;
          save2 = style_3.left;
          btn3.style.top = style_7.top;
          btn3.style.left = style_7.left;
          btn7.style.top = save;
          btn7.style.left = save2;
        }

        //リセットを押したとき、もしパターン2ならば、次の入れ替え処理を動かす。
        if (shuffle_pazule_number == 2){
          save = style_22.top;
          save2 = style_22.left;
          btn2.style.top = style_12.top;
          btn2.style.left = style_12.left;
          btn12.style.top = save;
          btn12.style.left = save2;
        }
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
