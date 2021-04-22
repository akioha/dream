// 左側
var tgt_container = document.getElementById('anime_left');
		const anim2 = lottie.loadAnimation({
			container: tgt_container,
			renderer: 'svg',
			loop: false,
			path: 'left2.json'
		});
// 上
var tgt_container = document.getElementById('anime_top');
		const anim1 = lottie.loadAnimation({
			container: tgt_container,
			renderer: 'svg',
			loop: false,
			path: 'top.json'
});
// 右側
var tgt_container = document.getElementById('anime_right');
		const anim3 = lottie.loadAnimation({
			container: tgt_container,
			renderer: 'svg',
			loop: false,
			path: 'right2.json'
});

// アニメーションが終わったらフェードアウト
anim3.addEventListener('complete', e=> {
		const anime = document.getElementById('anime');
  		anime.classList.add('animed');
} );	