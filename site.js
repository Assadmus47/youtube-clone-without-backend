const url = 'https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=Us&section=Now';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '44be722002msh9971eea059ac2b3p195734jsn945fbbc5e141',
		'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
	}
};
// vraibales

const videos = document.getElementsByClassName("videos")[0]


async function getVideos() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        for (let index = 0; index < result.videos.length; index++) {
            const title = result.videos[index].title;
            const author = result.videos[index].author;
            const image = result.videos[index].thumbnails[2].url;
            
            
           //const image = result.videos[index].number;
            // creating elements
            var video = document.createElement('div');
            video.className = "video-card"
            var vid_title = document.createElement('h3');
            var vid_author = document.createElement('h4');
            var vid_image = document.createElement('img');
            var vid_link = document.createElement('a');
            // appending elements
            vid_title.innerHTML = title;
            vid_author.innerHTML = author;
            vid_image.src = image;
            vid_link.href ='./videopage.html'


            videos.appendChild(vid_link);
            video.appendChild(vid_image);
            video.appendChild(vid_title);
            video.appendChild(vid_author);
            vid_link.appendChild(video);
            videos.appendChild(vid_link);

        }
        console.log(result.videos[1]);
    } catch (error) {
        console.error(error);
    }
}



getVideos()