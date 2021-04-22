// 左側
var tgt_container = document.getElementById('anime_left');
		const anime_left = lottie.loadAnimation({
			container: tgt_container,
			renderer: 'svg',
			loop: false,
			path: 'left2.json'
		});
// 上
var tgt_container = document.getElementById('anime_top');
		const anime_top = lottie.loadAnimation({
			container: tgt_container,
			renderer: 'svg',
			loop: false,
			path: 'top.json'
});
// 右側
var tgt_container = document.getElementById('anime_right');
		const anime_right = lottie.loadAnimation({
			container: tgt_container,
			renderer: 'svg',
			loop: false,
			path: 'right2.json'
});

// アニメーションが終わったらフェードアウト
anime_right.addEventListener('complete', e=> {
		const anime = document.getElementById('anime');
  		anime.classList.add('animed');
} );	
