var imgdir = 'img/songs/';
var songdir = 'songs/';
var songs = [
	{
		id: 1,
		mainscover: imgdir + 'mainbg1.png',
		mainsimg: imgdir + 'mains1.png',
		smallimg: imgdir + 'small1.png',
		playsongtitle: 'Call Me A Spaceman',
		playsubname: 'Hardwell Ft. Mitch Crown',
		playsongtime: '06:19',
		link: songdir + 'cmas.mp3'
	},
	{
		id: 2,
		mainscover: imgdir + 'mainbg2.png',
		mainsimg: imgdir + 'mains2.png',
		smallimg: imgdir + 'small2.png',
		playsongtitle: 'Wake Me Up',
		playsubname: 'Avicii',
		playsongtime: '04:29',
		link: songdir + 'wmu.mp3'
	},
	{
		id: 3,
		mainscover: imgdir + 'mainbg3.png',
		mainsimg: imgdir + 'mains3.png',
		smallimg: imgdir + 'small3.png',
		playsongtitle: 'Summertime Sadness',
		playsubname: 'Born To Die',
		playsongtime: '04:24',
		link: songdir + 'sumsad.mp3'
	},
	{
		id: 4,
		mainscover: imgdir + 'mainbg4.png',
		mainsimg: imgdir + 'mains4.png',
		smallimg: imgdir + 'small4.png',
		playsongtitle: 'Ocarina',
		playsubname: 'Dimitri Vegas & Like Mike',
		playsongtime: '05:17',
		link: songdir + 'ocarina.mp3'
	},
	{
		id: 5,
		mainscover: imgdir + 'mainbg5.png',
		mainsimg: imgdir + 'mains5.png',
		smallimg: imgdir + 'small5.png',
		playsongtitle: 'Mirrors',
		playsubname: 'Justin Timberlake',
		playsongtime: '08:04',
		link: songdir + 'mirrors.mp3'
	},
	{
		id: 6,
		mainscover: imgdir + 'mainbg6.png',
		mainsimg: imgdir + 'mains6.png',
		smallimg: imgdir + 'small6.png',
		playsongtitle: 'I Wish',
		playsubname: 'One Direction',
		playsongtime: '03:36',
		link: songdir + 'upallnight.mp3'
	}
];
var template = Handlebars.compile( $("#template").html() );
$("#playlist ul").append( template(songs) );