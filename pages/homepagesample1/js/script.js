window.onload = () => {

    let results = '';

    let multiData = [
        {"title": 'Lorem Ipsum 1',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        "imageLink": 'img/slide1.png'},

        {"title": 'Lorem Ipsum 2',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        "imageLink": 'img/slide2.png'},

        {"title": 'Lorem Ipsum 3',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        "imageLink": 'img/slide3.png'}
    ]


    for(let dataCount = 0; dataCount < multiData.length; dataCount++){
    
        results += `
        <div class="cards flex-wrap justify-between w-1/2 mr-30">
            <div class="relative block sm:flex md:flex items-center bg-green-600" style="min-height: 19rem;">
                <div class="relative w-full h-full w-2/5 overflow-hidden" style="min-height: 23rem;">
                    <img class="absolute inset-0 w-full h-full object-cover object-center" src="${multiData[dataCount].imageLink}" alt="">
                    <div class="absolute inset-0 w-full h-full"></div>
                    <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
                    </div>
                </div>
                <div class="w-full h-full w-3/5 flex items-center bg-green-600">
                    <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                    <h1 class="text-white text-2xl font-bold">${multiData[dataCount].title}</h1>
                    <p class="text-white mt-2 mb-10">${multiData[dataCount].description }</p>
                    <a class="bg-green-600 text-white px-25" href="">CHECK NOW</a>
                    </div>
                    <svg class="hidden sm:block absolute inset-y-0 h-full w-24 fill-current text-green-600 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                </div>
            </div>
        </div>`;

    }

    document.getElementsByClassName('carousel-main')[0].innerHTML = results;
    results = '';

    for(let dataCount = 0; dataCount < multiData.length; dataCount++){
    
        results += `
        <div class="flex items-center justify-center">
            <div class="w-2/3 rounded-lg">
                <div class="flex items-center justify-center pt-10 flex-col">
                    <img src="${multiData[dataCount].imageLink}" class="rounded w-20">
                    <h1 class="text-green-600 font-semibold text-xl mt-2">${multiData[dataCount].title}</h1>
                    <h1 class="text-black text-sm p-4 text-center"> ${multiData[dataCount].description }</h1>
                </div>
            </div>
        </div>`;
    }

    document.getElementsByClassName('how-it-works-container')[0].innerHTML = results;
    results = '';

    for(let dataCount = 0; dataCount < multiData.length; dataCount++){
    
        results += `
        <div class="shadow-md flex bg-white rounded-lg p-6 leading-normal">
            <img class="border-solid border-12 border-light-cyan rounded h-28 w-28 mx-auto mx-0 mr-6" src="${multiData[dataCount].imageLink}" />
            <div>
                <h1 class="text-green-600 font-bold">${multiData[dataCount].title}</h1>
                <p class="text-xs leading-normal text-gray-600">${multiData[dataCount].description}</p>
            </div>
        </div>`;
    }

    document.getElementsByClassName('featured-products-container')[0].innerHTML = results + results;
    results = '';

    for(let dataCount = 0; dataCount < multiData.length; dataCount++){
    
        results += `
            <div class="flex items-center justify-center bg-teal-400">
                <div class="w-full max-w-lg h-64 rounded-lg shadow-2xl overflow-hidden relative">
                    <img class="absolute inset-0 h-full w-full object-cover" src="${multiData[dataCount].imageLink}" alt="" />
                    <div class="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                    <div class="flex h-full items-center justify-center relative">
                    <h1 class="text-3xl text-teal-100 text-white tracking-wider">${multiData[dataCount].title}</h1>
                    </div>
                </div>
            </div>`;
    }

    document.getElementsByClassName('categories')[0].innerHTML = results + results;
    results = '';






  

}
