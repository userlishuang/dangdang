console.log('成功');
window.onload = function() {

    var slideImg = {
        init: function() {
            this.dealSlide();
        },
        dealSlide: function() {
            var imgSrc = [
                'images/dd_scroll_1.jpg',
                'images/dd_scroll_2.jpg',
                'images/dd_scroll_3.jpg',
                'images/dd_scroll_4.jpg',
                'images/dd_scroll_5.jpg',
                'images/dd_scroll_6.jpg'
            ]
            var img = document.getElementById('dd_scroll');
            console.log(img);
            var scrollNum = document.querySelectorAll('#scroll_number li');
            console.log(scrollNum);
            var showIndex = 0;
            var timer = null;
            // 处理图片
            function showImg() {
            	for( var i = 0; i < imgSrc.length; i++ ){
            		if( showIndex == i ){
            			img.src = imgSrc[i];
            		}
            	}
            }
            // 处理指示符
            function showIcon(){
            	for( var i = 0; i < scrollNum.length; i++ ){
            		if( showIndex == i ){
            			scrollNum[i].style.backgroundColor = 'red';
            		}else{
            			scrollNum[i].style.backgroundColor = '';
            		}
            	}
            }
            // 处理定时器
            function dealTimer(){
            	if( timer ){
            		clearInterval( timer );
            	}
            	showImg();
            	showIcon();
            	timer = setInterval(function(){
            		showIndex++;
            		if( showIndex == 6 ){
            			showIndex = 0;
            		}
            		showImg();
            		showIcon();
            	},2000)
            }
            // 处理mouseover mouseout
            document.querySelector('#scroll_number>ul').addEventListener('mouseover',function(e){
            	var liList = e.target;
            	console.log(liList);
            	var currentIndex = liList.value;
            	showIndex = currentIndex;
            	dealTimer();
            })
            dealTimer();
        }
    }
    slideImg.init();
}
