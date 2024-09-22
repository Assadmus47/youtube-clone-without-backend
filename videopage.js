const url = 'https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=7ghhRHRP6t4';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd6f2791a72msha295b982405ced2p113a58jsn1c774b87e870',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function getVideoDetails() {
    const vid_title = document.getElementsByClassName('vid-title')[0]
    const vid_channel = document.getElementsByClassName('vid-channel')[0]
    const vid_nov = document.getElementsByClassName('nov')[0]

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data = result.items[0].snippet
        vid_title.innerHTML = data.title;
        vid_channel.innerHTML = data.channelTitle;
        vid_nov.innerHTML = result.items[0].statistics.viewCount
        // console.log(data.title);
    } catch (error) {
        console.error(error);
    }
}

getVideoDetails()


const sugg_url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';

async function getSuggestVideos() {
    const suggestions = document.getElementsByClassName("suggestions")[0]
    try {
        const response = await fetch(sugg_url, options);
        const result = await response.json();
        result.items.forEach(video => {
            const link = document.createElement("a");
            const video_card = document.createElement("div");
            video_card.className = "video-card";
            const img = document.createElement("img");
            const sugg_info = document.createElement("div");
            const sugg_title = document.createElement("span");
            const sugg_channel = document.createElement("span");
            // const sugg_nov = document.createElement("span");
            
            link.href = './videopage.html'
            img.src = video.snippet.thumbnails.default.url
            sugg_title.innerHTML = video.snippet.title
            sugg_channel.innerHTML = video.snippet.channelTitle
            // sugg_nov.innerHTML =
            
            sugg_info.appendChild(sugg_title)
            sugg_info.appendChild(sugg_channel)
            video_card.appendChild(img)
            video_card.appendChild(sugg_info)
            link.appendChild(video_card)
            suggestions.appendChild(link)
        });
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getSuggestVideos()
// TODO
/* 
url
title
suggestions {trending}
channel name
*/