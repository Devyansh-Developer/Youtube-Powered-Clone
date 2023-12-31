
//On startUp
let startUp = document.querySelector('#StartUp');
setTimeout(() => {
    startUp.remove();
}, 5000)

// This is For Search  On search Bar which  includes guess and activation of icon and blue border features
const videoSearches = document.querySelectorAll('.YTsearch');
const searchGuess = document.querySelector('.search-guess');
const ytmic = document.querySelector('.micDiv');

// Here ForEach Function has been initialzed to keep the track on  every typed letter if the YT search  bar has value then only it will initialize

videoSearches.forEach(function (videoSearch) {
    const searchInput = videoSearch.querySelector('.videoSearch');

    searchInput.addEventListener('input', () => {
        if (searchInput.value) {
            // If the input has value  then blue border, Guess and mic feature will initialize
            videoSearch.style.border = '1px solid #1c62b9';
            searchGuess.style.display = 'block';
            ytmic.style.display = 'none';


            // This is for search icon which  will visible after typing 
            document.querySelector('#hoverMaginfy').style.display = 'flex';

        } else {
            videoSearch.style.border = '1px solid #777070';

            document.querySelector('#hoverMaginfy').style.display = 'none';
            searchGuess.style.display = 'none';
        }
    });

});

// On clicking enter or search icon
searchMagnify = () => {
    alert(`Server:Error`)
}
//for YOutube Mic 


ytmic.style.display = 'none';
function mic() {
    if (ytmic.style.display == 'none') {
        ytmic.style.display = 'flex';
        userpop.style.display = 'none'
        searchGuess.style.display = 'none';
        alert(`Mic On`);
    }
    else {
        ytmic.style.display = 'none'
        alert(`Mic Off`);
    }

}



//For user info login
let userpop = document.querySelector('.userDiv');
userpop.style.display = 'none'
function userInfo() {
    if (userpop.style.display == 'none') {
        userpop.style.display = 'initial';
        ytmic.style.display = 'none'
    }
    else {
        userpop.style.display = 'none'
    }

}


//To Expand the  left Section


let leftSectionExpandToggle = document.querySelector('.leftSectionExpandToggle');
let leftSection = document.querySelector('.left-section');
let leftSectionIcons = document.querySelectorAll('.leftSectionSideIcon');

leftSectionExpandToggle.addEventListener('click', () => {
    leftSection.classList.toggle('active')

    // Here Foreach is applied to access all to  apply  style 
    leftSectionIcons.forEach((icon) => {
        icon.classList.toggle('active')
    });


})



// Header categories
let category = [
    'All',
    'Coding',
    'Technology',
    'WebDev',
    'Programming',
    'Software',
    'Hardware',
    'Web Design',
    'Mobile Apps',
    'Data Science',
    'Artificial Intelligence',
    'Machine Learning',
    'Cybersecurity',
    'Networking',
    'Cloud Computing',
    'IOT',
    'Blockchain',
    'eCommerce',
    'Social Media',
    'Digital Marketing',
    'Graphic Design',
    'Animation',
    'Video Production',
    'Photography',
    'Music',
    'Film',
    'Literature',
    'History',
    'Politics',
    'Science',
    'Philosophy',
    'Spirituality',
    'Sports',
    'New Video'
];

let catContainer = document.querySelector('#categories');
catContainer.style.gridTemplateColumns = `repeat(${category.length}, 1fr)`;

// Here element is itself created in #categories div 
for (let i = 0; i < category.length; i++) {
    let categoryItem = document.createElement('span');
    categoryItem.textContent = category[i];
    categoryItem.classList.add('categoryCommon', category[i].replace(' ', '-')); // replace space with hyphen
    catContainer.appendChild(categoryItem);
}

//This is to change bg Color on clicking the categories
let ytCategories = document.querySelectorAll('.categoryCommon');
ytCategories.forEach(function (elem) {
    elem.addEventListener('click', function () {
        ytCategories.forEach(function (elem) {
            elem.style.backgroundColor = 'var(--GreyColor)';
            elem.style.color = 'var(--WhiteColor)';

        });
        this.style.backgroundColor = 'var(--WhiteColor)';
        elem.style.color = 'var(--BlackColor)';
        alert(elem.innerHTML)
    });
});



// For left  and right scroll  of  categories 

function right() {
    document.querySelector('#categories').scrollLeft += 200;
}
function left() {
    document.querySelector('#categories').scrollLeft -= 200;
}


// This is for youtube  embedded Iframes
let ytvid = [
    {
        title: `Introduction to Web Development | World's most premium Web Development Course | Lecture 0 (Reupload)`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/l1EssrLxt7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '4M views',
        channelName: "Apna College",
        subscrCount: `3.70M subscribers`,

    },
    {
        title: `Introduction to Web Development | World's most premium Web Development Course | Lecture 0 (Reupload)`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/l1EssrLxt7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '4M views',
        channelName: "Apna College",
        subscrCount: `3.70M subscribers`,

    },
    {
        title: `HTML Course | From Beginners to Advance Level | Lecture 1`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Rek0NWPCNOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '4.2M views',
        channelName: "Apna College",
        subscrCount: `3.70M subscribers`,

    },
    {
        title: `HTML Course | World's most premium HTML Course | Lecture 2`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2QR11oDukn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '3M views',
        channelName: "Apna College",
        subscrCount: `3.70M subscribers`,

    },
    {
        title: `HTML Course | Media Elements | Lecture 3`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jRAZlTEZi9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '4M views',
        channelName: "Apna College",
        subscrCount: `3.70M subscribers`,

    },

    {
        title: `Introduction to Programming & Python | Python Tutorial - Day #1`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/7wnove7K-ZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '1M views',
        channelName: "Code With Harry",
        subscrCount: `4M subscribers`,

    },
    {
        title: `Introduction to Programming & Python | Python Tutorial - Day #1`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/7wnove7K-ZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '1M views',
        channelName: "Code With Harry",
        subscrCount: `4M subscribers`,

    },
    {
        title: `Some Amazing Python Programs - The Power of Python | Python Tutorial - Day #2`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Tto8TS-fJQU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '1M views',
        channelName: "Code With Harry",
        subscrCount: `4M subscribers`,

    },
    {
        title: `Modules and Pip | Python Tutorial - Day #3`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xwKO_y2gHxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '1M views',
        channelName: "Code With Harry",
        subscrCount: `4M subscribers`,

    },

    {
        title: `Introduction to C++ | Lecture 1 | C++ and DSA Foundation Course`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/bL-o2xBENY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '740K views',
        channelName: "College Wallah",
        subscrCount: `400K subscribers`,

    },
    {
        title: `Visual Studio Code Installation on M1 Mac, Windows & Intel Mac | VS Code for Java, C & C++`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/VvYhfj2g4Zo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '740K views',
        channelName: "College Wallah",
        subscrCount: `400K subscribers`,

    },
    {
        title: `Variables and Output / Input in C++ | Lecture 3 | C++ and DSA Foundation Course`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/sv1ofY9B1q0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '740K views',
        channelName: "College Wallah",
        subscrCount: `400K subscribers`,

    },

    {
        title: `Lecture 54: Introduction to Stacks [Theory + Implementation] || C++ Placement Course`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/_6COl6V6mng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '900K views',
        channelName: "Code Help-By Babbar",
        subscrCount: `800K subscribers`,

    },
    {
        title: `Lecture 55: Stack Interview Questions || Placement Series by Love Babbar`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/BmZnJehDzyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '900K views',
        channelName: "Code Help-By Babbar",
        subscrCount: `800K subscribers`,

    },
    {
        title: `Lecture 56: Largest Rectangular Area in Histogram [Optimised Approach]`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/lJLcqDsmYfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '900K views',
        channelName: "Code Help-By Babbar",
        subscrCount: `800K subscribers`,

    },

    {
        title: `What are the skills to look in your next hire?`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/hQ5wo0nRgW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '300K views',
        channelName: "Tanay Pratap",
        subscrCount: `200K subscribers`,

    },
    {
        title: `Finding your co-founder can be easy`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/w1rryI1kPYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '300K views',
        channelName: "Tanay Pratap",
        subscrCount: `200K subscribers`,

    },
    {
        title: `What are the skills required for entrepreneurship?`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/o8A1rEY92jk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '300K views',
        channelName: "Tanay Pratap",
        subscrCount: `200K subscribers`,

    },
    {
        title: `Graduated Online in COVID: What to do next?`,
        url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/flOK8NE5GlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        views: '300K views',
        channelName: "Tanay Pratap",
        subscrCount: `200K subscribers`,

    },

]



// Here this is for random  suggested text in guess section 
for (let i = 0; i < ytvid.length; ++i) {
    let searchGuessText = document.createElement('p');

    searchGuessText.classList.add('searchGuessText');
    searchGuessText.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"><span>${ytvid[Math.floor(Math.random() * ytvid.length)].title}</span></i> <hr>`;
    searchGuess.appendChild(searchGuessText)
}


// Here is the  loop that created many div to form video blocks that consist  of iframe , title, channelName, logo, and views 

let videoBox = document.querySelector('.video-groups');
for (let i = 1; i < ytvid.length; i++) {

    let mainContainer = document.createElement('div');
    mainContainer.classList.add('mainDiv');

    videoBox.appendChild(mainContainer);

    //UpperContent of mainContainer

    let videoContent = document.createElement('div');
    videoContent.innerHTML = ytvid[i].url;
    videoContent.classList.add('videoContent');
    mainContainer.appendChild(videoContent);


    //Lower Content of mainContainer
    let videoLowContent = document.createElement('div');
    videoLowContent.classList.add('videoLowContent');
    mainContainer.appendChild(videoLowContent);


    // This is  for the afterLowContent information includes line and unlike and  description as well as comment section 
    let afterLowContent = document.createElement('div');
    afterLowContent.classList.add('live');
    afterLowContent.innerHTML = `<div  class="VideoIcons">
            <a class="LikesAndUnlike"><span class="material-symbols-outlined likeBtn">
thumb_up
</span><hr><span class="material-symbols-outlined unLikeBtn">
thumb_down
</span></a>
<a href="#" class="shareIcon">
<span class="material-symbols-outlined ">
share 
</span>Share

 <!-- This is for To copy Text to clipboard while sharing -->
    <div class="shareYtVideo">
        <!-- This is to copy Curent Project to clipboard  -->
        <div class="ShareYt1">

            <input type="text" value="https://bit.ly/42WtByl" id="myInput">
            <span class="material-symbols-outlined copyToClipboard"  >
content_copy
</span>
        </div>

        <!-- This is to share codepen link to wp  -->
        <div class="ShareYt2">
            <input type="text" value="https://bit.ly/42WtByl" >
            <i class="fa-brands fa-whatsapp" id="share-btn" style="color: #25D366;"></i>

        </div>
    </div>

</a>
<a href="#"  class="pip" >
   <span class="material-symbols-outlined">
branding_watermark
</span> PIP
</a>

<a href="#"  class="ambientIcon" onclick="ambientMode()">
    <span class="material-symbols-outlined">
ambient_screen
</span>Ambient Mode
</a>
<a href="#" class="reportIcon"><span class="material-symbols-outlined">
flag
</span>Report</a>
<a  href="#" class="bookmarkIcon">
    <span class="material-symbols-outlined">
bookmark
</span>Bookmark
</a>
            
                
           
        </div>
         <div class="getVidViews">${ytvid[i].views}</div>
        <div class="getVidDescription">
           
             <div class="getDecription">
                 Artificial Intelligence (AI) is rapidly advancing, and it's no longer a question of if it will take over the world, but when. In this video, we explore the possibilities of AI's evolution and what it could mean for humanity.

We'll dive into the latest developments in AI technology and its potential impact on society. From self-driving cars to virtual assistants, AI is already changing the way we live and work. But what happens when AI becomes smarter than humans and starts making decisions on its own?

We'll discuss the potential benefits and risks of a world dominated by AI, including the possibility of job loss, economic upheaval, and even existential threats. Will we be able to control AI, or will it control us?

Join us as we explore this fascinating topic and try to predict what the future might hold. Whether you're a tech enthusiast or simply curious about the impact of AI, this video is a must-watch. Don't miss out on this eye-opening discussion about the future of AI and its potential impact on the world as we know it.
             </div>

            
        </div> <div class="ShowHideText"   onclick="showHideButton()">Show</div>
        
        
        <!-- Here The comment Section Start -->
        

     <div class="commentSection">
        <div class="filterComments">
            <span class="commentsNum"></span>
            <span class="filterOtherComments"><span class="material-symbols-outlined">
sort
</span>Sort by<div  class="filterOption"><span class="topComment">Ascending</span></div></span>
      <i class="fa-solid fa-chevron-down TopDowncommentNav" ></i> </div>
        <div class="UserComment"><span class="UserInputs"><span  class="UserIcon">D</span><input type="text" class="UserCommentText">
            <button class="commentButton">Comment</button>

            </span>
            <div class="OtherComments">
                <span class="UserCommentInput"></span>
               
            </div>
             <hr>
        <div class="OtherGroupComment"></div>
       
        </div>


    </div> `;


    mainContainer.appendChild(afterLowContent)

    videoLowContent.insertAdjacentElement("afterend", afterLowContent)


    //For channel Logo


    let constant = "#";
    const values = "0123456789ABCDEF";

    for (let i = 0; i < 6; ++i) {
        constant = constant + values[Math.floor(Math.random() * 16)];
    }

    document.body.style.backgroundColor = constant;
    let channelLogo = document.createElement('div');

    channelLogo.innerHTML = ytvid[i].channelName.charAt(0);

    channelLogo.style.backgroundColor = constant;

    channelLogo.classList.add('channelLogo');

    videoLowContent.appendChild(channelLogo);



    //Video info at lower div

    let videoLowInfo = document.createElement('div');
    videoLowInfo.classList.add('videoLowInfo');
    videoLowContent.appendChild(videoLowInfo);

    //Video  Title

    let ytTitle = document.createElement('h2');
    ytTitle.textContent = ytvid[i].title;
    ytTitle.classList.add('ytTitle');

    videoLowInfo.appendChild(ytTitle);



    // document.querySelector('.videoContent').style.border='4px solid red'



    //Below Video Title
    // Also Includes Subscription Button 
    let channelName = document.createElement('span');
    channelName.classList.add('AllChannelDetails')
    channelName.innerHTML=`<span class="channelDetails"><h3>${ytvid[i].channelName}</h3> <p class="subscrCount">${ytvid[i].subscrCount}</p></span><button class="SubscribeButton" onclick="tog()">Subscribe</button>`;

    //Here is the toggle added beside title 
    channelName.innerHTML += `<span class="material-symbols-outlined moreRender">more_vert
    		 <div class="moreRenderDiv">
         <span  onclick="letsCopy()"> <span class="material-symbols-outlined linkRender">content_copy</span>Copy Link</span>
            <hr>
         <span>   <span class="material-symbols-outlined">flag</span>Report</span>
            <hr>
         <span>   <span class="material-symbols-outlined">block</span>Not Interested</span>
         </div>
    </span>
    `;

    channelName.classList.add('channelName');
    videoLowInfo.appendChild(channelName);


    //This is toggle for Subscribe Button
    function tog() {
        const subscribeBtn = document.querySelector('.SubscribeButton');
        subscribeBtn.innerHTML = `<lottie-player class="lottieBell" src="https://assets6.lottiefiles.com/packages/lf20_jkereflx.json"  background="transparent"  speed="2"  style="width: 30px; height: 30px;" autoplay  ></lottie-player> Subscribe <i class="fa-solid fa-chevron-down openSubscrOption unsubscribed"></i>         <!-- Subscribed MoreOption  -->
<div class="subscrOPtion">
    <span><span class="material-symbols-outlined">
notifications_active
</span>All</span>
<hr>
<span><span class="material-symbols-outlined">
notifications
</span>Personalized</span>
<hr>
<span><span class="material-symbols-outlined">
notifications_off
</span>None</span>
<hr>
 <span> <i class="fa-solid fa-user-minus " ></i>Unsubscribed</span>
</div>`;

        let openSubscrOption = document.querySelector('.openSubscrOption')
        subscribeBtn.classList.toggle('active')
        if (subscribeBtn.classList.contains('active')) {
            alert(`Subscribed`)
        }
        else {
            document.querySelector('.subscrOPtion').style.display = 'none';
            document.querySelector('.lottieBell').style.display = 'none';
            document.querySelector('.unsubscribed').style.display = 'none';

            alert(`Unsubscribed`)
        }
        openSubscrOption.classList.toggle('active')




    }

    // //Video views and timing
    let vidViews = document.createElement('span');
    vidViews.textContent = ytvid[i].views;
    vidViews.classList.add('vidViews');
    videoLowInfo.appendChild(vidViews);
}















// Herer is the Other Function starts  

const windowWidth = window.innerWidth;

// This is to set  video with  other  information 

// Here there is many div on clicking particlular div the content of that div append to GetVideo div which is in sideVid div 

let v = document.querySelectorAll('.mainDiv');
v.forEach(function (elem) {

    elem.addEventListener('click', function () {
        document.querySelector('.sidevid').style.display = 'block';
        document.querySelector('.heroDiv').style.display = 'none';
        let getVideoDiv = document.querySelector('.GetVideo')
        getVideoDiv.innerHTML = elem.innerHTML;



        //   This is  for automatically adjusting  video gropu container to width  100% in 700 px width  of screen  (This is  second alternative)

        if (windowWidth <= 700) {

            document.querySelector('.video-groups').style.width = '100%';

        }
        else {
            document.querySelector('.video-groups').style.width = '35%';
        }


        // This is for Comment Section Which includes User comment Inputs and other Feeded  comments in Loop  

        let userCommentText = document.querySelector('.UserCommentText');

        let submitButton = document.querySelector('.commentButton');
        let userIcon = document.querySelector('.UserIcon');
        let userCommentInput = document.querySelector('.UserCommentInput')

        submitButton.addEventListener('click', () => {
            let undoData = userCommentInput.innerHTML = `<span class="UserIcon">${userIcon.textContent}</span><span class="Input1">${userCommentText.value}</span><button class="CommentHide">Cancel</button>`;
            userCommentText.value = "";
            userCommentInput.style.justifyContent = 'start';
            let hideBtn = document.querySelector('.CommentHide');
            let spanInput = document.querySelector('.Input1')

            document.querySelector('.UserInputs').style.borderBottom = '1px solid #373636';
            document.querySelector('.UserInputs').style.paddingBottom = ' 20px';
            alert(`Commented`)

            hideBtn.addEventListener('click', () => {
                spanInput.style.display = 'none';

                userCommentInput.innerHTML = `<button class="CommentHideUndo">Undo</button>`;
                userCommentInput.style.justifyContent = 'center';


                let commentHideUndoBtn = document.querySelector('.CommentHideUndo');
                commentHideUndoBtn.addEventListener('click', () => {
                    userCommentInput.innerHTML = undoData;
                    userCommentInput.style.justifyContent = 'start';
                    document.querySelector('.CommentHide').style.display = 'none'

                })


            });

        });


        let otherComments = [
            {
                name: "Sarah",
                comment: "Thanks for sharing this helpful information!"
            },
            {
                name: "John",
                comment: "I learned a lot from this video. Keep up the good work!"
            },
            {
                name: "Emily",
                comment: "Excellent presentation. I will share this with my colleagues."
            },
            {
                name: "Mike",
                comment: "Great job explaining complex concepts in a clear and concise manner."
            },
            {
                name: "Jenny",
                comment: "I appreciate the effort you put into making this video. Thank you!"
            },
            {
                name: "David",
                comment: "This was exactly what I was looking for. Thank you for sharing!"
            },
        ];



        let comment = document.querySelector('.OtherGroupComment');

        for (let i = 0; i < otherComments.length; ++i) {
            comment.innerHTML += `<div class="OtherUserComment">
            <div class="OtherCommentedIcons">${otherComments[i].name.charAt(0)}</div>
    <span  class="OtherCommentText">${otherComments[i].name}<br>${otherComments[i].comment}<br>
     <a class="LikesAndUnlikeForComments"><span class="material-symbols-outlined">
thumb_up
</span>
            <span class="material-symbols-outlined">
thumb_down
</span>
        </a>
        </span>
    
    </div><hr>`;



            let constant = "#";
            const values = "0123456789ABCDEF";

            for (let i = 0; i < 6; ++i) {
                constant = constant + values[Math.floor(Math.random() * 16)];

            }
            const icons = document.querySelectorAll('.OtherCommentedIcons');

            icons.forEach((icon) => {
                icon.style.backgroundColor += constant;
            })




        }


        document.querySelector('.commentsNum').textContent = otherComments.length + `  Comments`;

        let filter = document.querySelector('.filterOtherComments');
        let filterOptions = document.querySelector('.filterOption');

        filter.addEventListener('click', () => {

            filterOptions.classList.toggle('active')

        })





        const commentFilters = document.querySelector('.topComment');


        commentFilters.addEventListener('click', () => {


            if (commentFilters.textContent === `Ascending`) {
                commentFilters.textContent = `Descending`;
            }
            else {
                commentFilters.textContent = `Ascending`;
            }

            otherComments = otherComments.reverse();

            comment.innerHTML = ""; // clear the current content of the comment div

            for (let i = 0; i < otherComments.length; ++i) {
                comment.innerHTML += `<div class="OtherUserComment">
            <div class="OtherCommentedIcons">${otherComments[i].name.charAt(0)}</div>
    <span  class="OtherCommentText">${otherComments[i].name}<br>${otherComments[i].comment}<br>
     <a class="LikesAndUnlikeForComments"><span class="material-symbols-outlined">
thumb_up
</span>
            <span class="material-symbols-outlined">
thumb_down
</span>
        </a>
        </span>
    
    </div><hr>`;



                let constant = "#";
                const values = "0123456789ABCDEF";

                for (let i = 0; i < 6; ++i) {
                    constant = constant + values[Math.floor(Math.random() * 16)];

                }
                const icons = document.querySelectorAll('.OtherCommentedIcons');

                icons.forEach((icon) => {
                    icon.style.backgroundColor += constant;
                })




            }

        });



        // For Phone Opening Comment Box  
        let commentSection = document.querySelector('.commentSection');
        let topDowncommentNav = document.querySelector('.TopDowncommentNav');
        topDowncommentNav.addEventListener('click', () => {
            commentSection.classList.toggle('active');
            topDowncommentNav.classList.toggle('active');
            if (topDowncommentNav.classList.contains('active')) {
                document.querySelector('.video-groups').style.display = 'none';
            }
            else {
                document.querySelector('.video-groups').style.display = 'flex';
            }






        })






        //For display block of Yt share video on clicking share button
        let shareIcon = document.querySelector('.shareIcon');
        let shareYtVideo = document.querySelector('.shareYtVideo');

        shareIcon.addEventListener('click', function () {
            shareYtVideo.classList.toggle('active');
            if (shareYtVideo.classList.contains('active')) {
                document.querySelector('.getVidDescription').style.zIndex = '-1';
            }
            else {
                document.querySelector('.getVidDescription').style.zIndex = '0';
            }
        });


        // This Is to Copy link By using Function
    let copyClip = document.querySelector('.copyToClipboard');
copyClip.addEventListener('click', () => { 
let copyText = document.getElementById("myInput");
  const tempTextArea = document.createElement('textarea');
        tempTextArea.value = copyText.value;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
        alert('Text copied');
    
});




        //   This is to share codepen link to wp 

        const shareBtn = document.querySelector('#share-btn');

        shareBtn.addEventListener('click', () => {
            const message = 'https://bit.ly/42WtByl';
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl);
        });

        // clicking for like  and unlike button 

        let likeBtn = document.querySelector('.likeBtn');
        let unLikeBtn = document.querySelector('.unLikeBtn');
        likeBtn.innerHTML = `thumb_up`;
        likeBtn.addEventListener('click', () => {

            if (likeBtn.innerHTML == `thumb_up`) {

                likeBtn.innerHTML = `<lottie-player class="likeAnim" src="https://assets6.lottiefiles.com/private_files/lf30_yrtwekju.json"  background="transparent"  speed="2"  style="width: 75px; height: 75px;"  autoplay></lottie-player>`
            }
            else {
                likeBtn.innerHTML = `thumb_up`
            }
            unLikeBtn.classList.remove('likeColor');
            alert(`Liked`)

        });

        unLikeBtn.addEventListener('click', () => {

            unLikeBtn.classList.toggle('likeColor');
            likeBtn.innerHTML = `thumb_up`
            alert(`Unliked`)

        });



        //Picture in Picture Feature
        let pip = document.querySelector('.pip');
        let ytSmallDiv = document.querySelector('.YtSmallDiv');
        let pipYT = elem.querySelector('.videoContent');


        pip.addEventListener('click', pipMode = () => {
            ytSmallDiv.innerHTML = pipYT.innerHTML + `<span class="material-symbols-outlined cancelHeroDiv" onclick="closePIP()">close</span>`;
            ytSmallDiv.classList.toggle('active');

            //Closing PIP on clicking cross button
            closePIP = () => {
                pipMode();
            }

        });





    });

});//Here is the end






function showHideButton() {
    let showHideBtn = document.querySelector('.ShowHideText');
    let videoDescr = document.querySelector('.getVidDescription');
    videoDescr.classList.toggle('active');
    if (videoDescr.classList.contains('active')) {

        showHideBtn.textContent = 'Show Less';


    } else {
        document.querySelector('.sidevid').style.marginBottom = '5px';
        showHideBtn.textContent = 'Show More';
    }

}

//   For giving  ambient mode to video
function ambientMode() {
    let ambientIcon = document.querySelector('.ambientIcon');
    let videoContent = document.querySelector('.videoContent');
    let videoIconsSpanActive = ambientIcon.querySelector('span');

    videoContent.classList.toggle('active');
    ambientIcon.classList.toggle('videoIconsActive');
    videoIconsSpanActive.classList.toggle('videoIconsSpanActive');
    if (
        videoIconsSpanActive.classList.contains('videoIconsSpanActive')) {
        alert(`Ambient Mode On`)
    }
    else {
        alert(`Ambient Mode Off`)
    }


}

// For Changing Appearance of Youtube
let darkTheme = document.body;
let appearanceIcon = document.querySelector('.fa-moon');

function appearance() {
    darkTheme.classList.toggle('dark-ThemeActive');
    if (darkTheme.classList.contains('dark-ThemeActive')) {
        appearanceIcon.classList.replace('fa-moon', 'fa-sun');
        alert(`Light Mode On`);
    }
    else {
        appearanceIcon.classList.replace('fa-sun', 'fa-moon');
        alert(`Dark Mode On`);
    }


}


// To Hide Hero Div on Clicking cross button 

let cancelHeroDiv = document.querySelector('.cancelHeroDiv');
cancelHeroDiv.addEventListener('click', () => {
    document.querySelector('.heroDiv').style.display = 'none';
})


function showAlert(message) {
    let alertDiv = document.querySelector('#alertDiv');
    alertDiv.textContent = message;
    alertDiv.style.display = 'block';
}

// Override the default behavior of alert()
function alert(message) {
    let alertDiv = document.querySelector('#alertDiv');
    alertDiv.textContent = message;
    alertDiv.style.display = 'block';
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 2400);
}





/* This is for the more option in main div  */
let moreRender = document.querySelectorAll('.moreRender');
let moreRenderDiv = document.querySelectorAll('.moreRenderDiv');

moreRender.forEach((elem, index) => {
    elem.addEventListener('mouseenter', () => {
        moreRenderDiv[index].style.display = 'block';
    });

    elem.addEventListener('mouseleave', () => {
        moreRenderDiv[index].style.display = 'none';
    });
});

//Copying from moreRenderDiv
letsCopy = () => {
    copyShareText();
}




// Editing Profile Name
const editInput = document.querySelector('#ProfileName');
const key = 'key';
const editProfile = document.querySelector('.editProfile');

editProfile.addEventListener('click', () => {
    localStorage.setItem(key, editInput.value);
    editInput.classList.toggle('active');
    if (editInput.classList.contains('active')) {
        alert(`Edit name`);
        editInput.style.color = 'red'
    } else {
        alert(`Edited`);
        editInput.style.color = 'white'
    }
});

editInput.value = localStorage.getItem(key);
















// PIP Div Dragable active on clicking PIP icon 


dragElement(document.querySelector('.YtSmallDiv'));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}








//This is to Upload LotttieFlies on every click with cancel div button
let lottieSection = document.querySelector('.lottieSection');
let uploadLottie = document.querySelector('.uploadLottie');


cancelLottie = () => {
    lottieSection.style.display = 'none';

}

function lotti(take) {
    lottieSection.style.display = 'flex';
    uploadLottie.innerHTML = take + ` <i class="fa-solid fa-xmark cancelLottiDiv " onclick="cancelLottie()" ></i> `;
}


// Here the argument is passed to lotties when video icon is clciked on it 
videoUpload = () => {
    lotti(` 
<lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_imyUMa.json"  background="transparent"  speed="1"  style="width: 400px; height: 400px;"  loop  autoplay></lottie-player>`, alert(`Server:Error`))
}

//// Here the argument is passed to lotties when History icon is clciked on it 

historyVid = () => {
    lotti(`
<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_sQ3mWSdc3u.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop  autoplay></lottie-player>`, alert(`Server:Error`))
}

//// Here the argument is passed to lotties when History icon is clciked on it 

subscribeVid = () => {
    lotti(`
<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_k1rx9jox.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop  autoplay></lottie-player>`, alert(`Server:Error`))
}
//// Here the argument is passed to lotties when Library icon is clciked on it 
libraryVid = () => {
    lotti(`
<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_HWVYXZ8WMf.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop  autoplay></lottie-player>`, alert(`No Data Found`))
}
//// Here the argument is passed to lotties when YT short icon is clciked on it 
ytShortVid = () => {
    lotti(`
<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_xhbtnoqu.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop  autoplay></lottie-player>`, alert(`Shorts Not Found`))
}
//// Here the argument is passed to lotties when bell icon is clciked on it 
ytNotify = () => {
    lotti(`
<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_wdqpqy2q.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop  autoplay></lottie-player>`, alert(`0 Nofication`))
}

//// Here the argument passed to lotties when youtube studio icon is clciked on it 
ytStudioDiv = () => {
    lotti(`
<lottie-player src="https://assets4.lottiefiles.com/packages/lf20_cxc3ktlp.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop  autoplay></lottie-player>`, alert(`Nothing Found`))
}

//// Here the argument passed to lotties when youtube studio icon is clciked on it 
ytChannelDiv = () => {
    lotti(`
<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_9pdquWhGGG.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop  autoplay></lottie-player>`, alert(`Nothing Found`))
}









