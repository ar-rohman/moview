<template>
    <!-- <div class=""> -->
    <div class="relative -mt-4">
        <img
            src="https://image.tmdb.org/t/p/original/Ac2neP9SZtetX7sAHvl3MHfWnWC.jpg"
            alt=""
            class="rounded-3xl h-80 w-full object-cover object-center" />
        <div class="absolute -inset-px">
            <div class="bg-gradient-to-b from-white/20 to-white w-full h-full">
                <div class="h-full flex flex-col justify-between p-4 ztext-white">
                    <div class="flex gap-x-4 text-black">
                        <div class="h-6 w-6" v-html="arrowBackIcon"></div>
                        <div class="font-semibold">Munich: The Edge of War</div>
                    </div>
                    <div class="flex justify-between px-4 sm:px-10 pb-4">
                        <div class="flex items-center font-semibold">
                            <div class="h-5 w-5 text-yellow-500" v-html="starIcon"></div>
                            <p class="ml-1 text-sm ztext-gray-100">4.5 | 2345 Reviews</p>
                        </div>
                        <div class="flex gap-x-4 sm:gap-x-8 items-center">
                            <div
                                class="font-bold border-2 border-red-500 py-2 px-1.5 rounded-full text-red-500">
                                18+
                            </div>
                            <button
                                class="bg-red-500 rounded-xl p-3 flex shadow-md hover:bg-red-600 focus:bg-red-700 focus:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
                                title="Add to watchlist">
                                <div class="w-6 h-6 text-white" v-html="bookmarkOutlineIcon"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col md:flex-row gap-10 lg:gap-20 mt-10">
        <div class="w-full md:w-2/3 lg:w-3/4 zbg-blue-400">
            <div class="flex gap-4">
                <img
                    src="https://image.tmdb.org/t/p/original/Ac2neP9SZtetX7sAHvl3MHfWnWC.jpg"
                    alt=""
                    class="h-[128px] w-[96px] rounded-3xl object-cover object-center" />
                <div class="flex flex-col gap-4 justify-between">
                    <div class="flex flex-col gap-y-2">
                        <div class="font-semibold sm:font-bold sm:text-xl">
                            Evangelion: 3.0+1.0 Thrice Upon a Time
                        </div>
                        <div
                            class="flex gap-x-4 divide-x divide-gray-700 text-gray-500 text-sm font-semibold">
                            <div class="flex gap-x-2 items-center">
                                <div class="h-5 w-5" v-html="calendarOutlineIcon"></div>
                                2020
                            </div>
                            <div class="pl-2 flex gap-x-2 items-center">
                                <div class="h-5 w-5" v-html="eyeOutlineIcon"></div>
                                2023
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 flex-wrap">
                        <template v-for="i in 5" :key="i">
                            <div class="px-4 py-1 border rounded-full text-sm font-semibold">
                                Action
                            </div>
                        </template>
                    </div>
                    <div class="text-sm zhidden sm:block">Tagline: Bye-bye, all of EVANGELION</div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-10 mt-6">
                <div class="w-full lg:w-2/3">
                    <div class="font-semibold mb-2">Overview</div>
                    <div class="">
                        In the aftermath of the Fourth Impact, stranded without their Evangelions,
                        Shinji, Asuka, and Rei find refuge in one of the rare pockets of humanity
                        that still exist on the ruined planet Earth. There, each of them live a life
                        far different from their days as an Evangelion pilot. However, the danger to
                        the world is far from over. A new impact is looming on the horizon—one that
                        will prove to be the true end of Evangelion.
                    </div>
                    <div class="font-semibold mt-10 mb-2">Reviews</div>
                    <div class="flex gap-4">
                        <img
                            src="https://image.tmdb.org/t/p/original/Ac2neP9SZtetX7sAHvl3MHfWnWC.jpg"
                            alt=""
                            class="h-[35px] w-[35px] min-w-[35px] rounded-full object-cover object-center" />
                        <div class="w-full flex justify-between">
                            <div class="">
                                <div class="font-semibold text-sm">John Chard</div>
                                <div class="text-sm text-gray-500">6 day ago</div>
                            </div>
                            <div class="self-end flex gap-x-0.5">
                                <div class="h-5 w-5 text-yellow-400" v-html="starIcon"></div>
                                <div class="h-5 w-5 text-yellow-400" v-html="starIcon"></div>
                                <div class="h-5 w-5 text-yellow-400" v-html="starIcon"></div>
                                <div class="h-5 w-5 text-yellow-400" v-html="starHalfIcon"></div>
                                <div class="h-5 w-5 text-slate-300" v-html="starIcon"></div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 line-clamp-3 text-gray-500 text-sm">
                        Some birds aren't meant to be caged.\r\n\r\nThe Shawshank Redemption is
                        written and directed by Frank Darabont. It is an adaptation of the Stephen
                        King novella Rita Hayworth and Shawshank Redemption. Starring Tim Robbins
                    </div>
                </div>
                <div class="w-full lg:w-1/3">
                    <div class="font-semibold mb-4">Cast</div>
                    <div class="flex lg:flex-col gap-4 flex-wrap">
                        <template v-for="i in 5" :key="i">
                            <div class="flex items-center flex-col lg:flex-row gap-x-3">
                                <img
                                    src="https://image.tmdb.org/t/p/original/lbUQ7ilvBtWMU23reKsHg3jRmsf.jpg"
                                    alt=""
                                    class="h-[50px] w-[50px] min-w-[50px] rounded-full object-cover object-center" />
                                <div
                                    class="flex flex-col flex-wrap items-center lg:items-start w-[80px] lg:w-full">
                                    <div class="line-clamp-1 text-xs lg:text-base font-semibold">
                                        Melanie Zanetti
                                    </div>
                                    <div class="line-clamp-1 text-xs lg:text-sm text-gray-500">
                                        Julia Mitchell
                                    </div>
                                </div>
                            </div>
                        </template>
                        <button class="mt-4 text-sm font-semibold text-red-400 hover:text-red-600">
                            See more
                        </button>
                    </div>
                </div>
            </div>
            <!-- <ListCarousel title="More like this" :data="data" see-more-link="#" /> -->
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4">
            <div>
                <div class="font-semibold mb-2">Recommendations</div>
                <div class="flex flex-col zmd:flex-row gap-3">
                    <template v-for="item in sidebarData" :key="item.id">
                        <SidebarCard
                            :id="item.id"
                            :title="item.title"
                            :image="item.image"
                            :vote-average="item.vote_average" />
                    </template>
                </div>
                <div class="mt-2">
                    <button class="bg-red-500 rounded-xl text-white px-6 py-2 w-full">
                        See more
                    </button>
                </div>
            </div>
        </div>
    </div>
    <ListCarousel title="More like this" :data="data" see-more-link="#" />
    <!-- </div> -->
</template>
<script>
import {
    arrowBackIcon,
    starIcon,
    starHalfIcon,
    bookmarkOutlineIcon,
    eyeOutlineIcon,
    calendarOutlineIcon,
} from '../components/icon';
import ListCarousel from '../components/ListCarousel.vue';
import SidebarCard from '../components/SidebarCard.vue';

// 1EAxNqdkVnp48a7NUuNBHGflowM.jpg
// md5wZRRj8biHrGtyitgBZo7674t.jpg
// sTZ20Eg0qKxlrKkLVnwfyfHEOSa.jpg
// /nj5a7SnvBdWGBNVZxcfM46t1CBt.jpg
// https://image.tmdb.org/t/p/original/Ac2neP9SZtetX7sAHvl3MHfWnWC.jpg
// https://via.placeholder.com/192x256/FFFFFF/808080?text=Dummy Image
export default {
    components: { ListCarousel, SidebarCard },
    setup() {
        const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

        const isLetter = (string) => {
            return string.toLowerCase() != string.toUpperCase();
        };
        const results = [
            {
                adult: false,
                backdrop_path: '/5hNcsnMkwU2LknLoru73c76el3z.jpg',
                genre_ids: [35, 18, 10749],
                id: 19404,
                original_language: 'hi',
                original_title: 'दिलवाले दुल्हनिया ले जायेंगे',
                overview:
                    'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
                popularity: 29.662,
                // poster_path: '/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
                poster_path: '',
                release_date: '1995-10-20',
                title: 'Dilwale Dulhania Le Jayenge',
                video: false,
                vote_average: 8.7,
                vote_count: 3374,
            },
            {
                adult: false,
                // backdrop_path: '/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
                backdrop_path: '',
                genre_ids: [18, 80],
                id: 278,
                original_language: 'en',
                original_title: 'The Shawshank Redemption',
                overview:
                    'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
                popularity: 79.091,
                poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
                release_date: '1994-09-23',
                title: 'The Shawshank Redemption',
                video: false,
                vote_average: 8.7,
                vote_count: 20601,
            },
            {
                adult: false,
                // backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
                backdrop_path: '',
                genre_ids: [18, 80],
                id: 238,
                original_language: 'en',
                original_title: 'The Godfather',
                overview:
                    'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
                popularity: 80.019,
                // poster_path: '/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg',
                poster_path: '',
                release_date: '1972-03-14',
                title: 'The Godfather',
                video: false,
                vote_average: 8.7,
                vote_count: 15383,
            },
            {
                adult: false,
                backdrop_path: '/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg',
                genre_ids: [10749],
                id: 724089,
                original_language: 'en',
                original_title: "Gabriel's Inferno Part II",
                overview:
                    "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
                popularity: 18.1,
                poster_path: '/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg',
                release_date: '2020-07-31',
                title: "Gabriel's Inferno Part II",
                video: false,
                vote_average: 8.6,
                vote_count: 1376,
            },
            {
                adult: false,
                backdrop_path: '/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg',
                genre_ids: [18, 36, 10752],
                id: 424,
                original_language: 'en',
                original_title: "Schindler's List",
                overview:
                    'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
                popularity: 50.215,
                poster_path: '/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
                release_date: '1993-11-30',
                title: "Schindler's List",
                video: false,
                vote_average: 8.6,
                vote_count: 12284,
            },
            {
                adult: false,
                backdrop_path: '/w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg',
                genre_ids: [10749],
                id: 696374,
                original_language: 'en',
                original_title: "Gabriel's Inferno",
                overview:
                    "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
                popularity: 12.006,
                poster_path: '/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg',
                release_date: '2020-05-29',
                title: "Gabriel's Inferno",
                video: false,
                vote_average: 8.6,
                vote_count: 2188,
            },
            {
                adult: false,
                backdrop_path: '/l5K9elugftlcyIHHm4nylvsn26X.jpg',
                genre_ids: [18],
                id: 255709,
                original_language: 'ko',
                original_title: '소원',
                overview:
                    'After 8-year-old So-won narrowly survives a brutal sexual assault, her family labors to help her heal while coping with their own rage and grief.',
                popularity: 45.471,
                poster_path: '/x9yjkm9gIz5qI5fJMUTfBnWiB2o.jpg',
                release_date: '2013-10-02',
                title: 'Hope',
                video: false,
                vote_average: 8.6,
                vote_count: 294,
            },
            {
                adult: false,
                backdrop_path: '/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg',
                genre_ids: [18, 80],
                id: 240,
                original_language: 'en',
                original_title: 'The Godfather: Part II',
                overview:
                    'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
                popularity: 58.602,
                poster_path: '/v3KCBeX0CBlZnHZndimm7taYqwo.jpg',
                release_date: '1974-12-20',
                title: 'The Godfather: Part II',
                video: false,
                vote_average: 8.6,
                vote_count: 9267,
            },
            {
                adult: false,
                backdrop_path: '/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg',
                genre_ids: [10749, 35],
                id: 761053,
                original_language: 'en',
                original_title: "Gabriel's Inferno Part III",
                overview:
                    "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
                popularity: 34.008,
                poster_path: '/qtX2Fg9MTmrbgN1UUvGoCsImTM8.jpg',
                release_date: '2020-11-19',
                title: "Gabriel's Inferno Part III",
                video: false,
                vote_average: 8.6,
                vote_count: 933,
            },
            {
                adult: false,
                backdrop_path: '/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg',
                genre_ids: [10749, 16, 18],
                id: 372058,
                original_language: 'ja',
                original_title: '君の名は。',
                overview:
                    'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Takis body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
                popularity: 185.155,
                poster_path: '/q719jXXEzOoYaps6babgKnONONX.jpg',
                release_date: '2016-08-26',
                title: 'Your Name.',
                video: false,
                vote_average: 8.6,
                vote_count: 8274,
            },
            {
                adult: false,
                backdrop_path: '/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg',
                genre_ids: [16, 10751, 14],
                id: 129,
                original_language: 'ja',
                original_title: '千と千尋の神隠し',
                overview:
                    'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
                popularity: 108.603,
                poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
                release_date: '2001-07-20',
                title: 'Spirited Away',
                video: false,
                vote_average: 8.5,
                vote_count: 12340,
            },
            {
                adult: false,
                backdrop_path: '/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
                genre_ids: [35, 53, 18],
                id: 496243,
                original_language: 'ko',
                original_title: '기생충',
                overview:
                    "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
                popularity: 106.089,
                poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
                release_date: '2019-05-30',
                title: 'Parasite',
                video: false,
                vote_average: 8.5,
                vote_count: 12982,
            },
            {
                adult: false,
                backdrop_path: '/u1wHUA0R48FH4WV3sGqjwx3aNZm.jpg',
                genre_ids: [16, 18, 10402, 10749],
                id: 632632,
                original_language: 'ja',
                original_title: '映画 ギヴン',
                overview:
                    "The film centers on the love relationship among the band's bassist Haruki Nakayama, drummer Akihiko Kaji, and Akihiko's roommate and ex-boyfriend Ugetsu Murata.",
                popularity: 147.908,
                poster_path: '/xKCtoYHUyX8zAg68eemnYa2orep.jpg',
                release_date: '2020-08-22',
                title: 'Given',
                video: false,
                vote_average: 8.5,
                vote_count: 289,
            },
            {
                adult: false,
                backdrop_path: '/1EAxNqdkVnp48a7NUuNBHGflowM.jpg',
                genre_ids: [16, 28, 878, 18],
                id: 283566,
                original_language: 'ja',
                original_title: 'シン・エヴァンゲリオン劇場版:||',
                overview:
                    'In the aftermath of the Fourth Impact, stranded without their Evangelions, Shinji, Asuka, and Rei find refuge in one of the rare pockets of humanity that still exist on the ruined planet Earth. There, each of them live a life far different from their days as an Evangelion pilot. However, the danger to the world is far from over. A new impact is looming on the horizon—one that will prove to be the true end of Evangelion.',
                popularity: 193.597,
                poster_path: '/md5wZRRj8biHrGtyitgBZo7674t.jpg',
                release_date: '2021-03-08',
                title: 'Evangelion: 3.0+1.0 Thrice Upon a Time',
                video: false,
                vote_average: 8.5,
                vote_count: 437,
            },
            {
                adult: false,
                backdrop_path: '/qqHQsStV6exghCM7zbObuYBiYxw.jpg',
                genre_ids: [18],
                id: 389,
                original_language: 'en',
                original_title: '12 Angry Men',
                overview:
                    "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
                popularity: 30.115,
                poster_path: '/e02s4wmTAExkKg0yF4dEG98ZRpK.jpg',
                release_date: '1957-04-10',
                title: '12 Angry Men',
                video: false,
                vote_average: 8.5,
                vote_count: 6128,
            },
            {
                adult: false,
                backdrop_path: '/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg',
                genre_ids: [14, 18, 80],
                id: 497,
                original_language: 'en',
                original_title: 'The Green Mile',
                overview:
                    "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
                popularity: 127.085,
                poster_path: '/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
                release_date: '1999-12-10',
                title: 'The Green Mile',
                video: false,
                vote_average: 8.5,
                vote_count: 13384,
            },
            {
                adult: false,
                backdrop_path: '/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
                genre_ids: [18, 28, 80, 53],
                id: 155,
                original_language: 'en',
                original_title: 'The Dark Knight',
                overview:
                    'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
                popularity: 91.849,
                poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
                release_date: '2008-07-14',
                title: 'The Dark Knight',
                video: false,
                vote_average: 8.5,
                vote_count: 26692,
            },
            {
                adult: false,
                backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
                genre_ids: [53, 80],
                id: 680,
                original_language: 'en',
                original_title: 'Pulp Fiction',
                overview:
                    "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
                popularity: 71.059,
                poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
                release_date: '1994-09-10',
                title: 'Pulp Fiction',
                video: false,
                vote_average: 8.5,
                vote_count: 22502,
            },
            {
                adult: false,
                backdrop_path: '/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg',
                genre_ids: [12, 14, 28],
                id: 122,
                original_language: 'en',
                original_title: 'The Lord of the Rings: The Return of the King',
                overview:
                    "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
                popularity: 131.543,
                poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
                release_date: '2003-12-01',
                title: 'The Lord of the Rings: The Return of the King',
                video: false,
                vote_average: 8.5,
                vote_count: 18954,
            },
            {
                adult: false,
                backdrop_path: '/xs6awEGjnH3e36YSAromfYu3PBQ.jpg',
                genre_ids: [12, 35],
                id: 40096,
                original_language: 'pt',
                original_title: 'O Auto da Compadecida',
                overview:
                    'The lively Jack the Cricket and the sly Chicó are poor guys living in the hinterland who cheat a bunch of people in a small in Northeastern Brazil. When they die, they have to be judged by Christ, the Devil and the Virgin Mary before they are admitted to paradise.',
                popularity: 9.39,
                poster_path: '/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg',
                release_date: '2000-09-15',
                title: "A Dog's Will",
                video: false,
                vote_average: 8.5,
                vote_count: 850,
            },
        ];

        const data = results.map((item) => {
            const imageExist = item.poster_path || item.backdrop_path;
            return {
                id: item.id,
                image: imageExist
                    ? `${imageBaseUrl}w500${imageExist}`
                    : 'https://via.placeholder.com/192x256.png?text=Dummy Image',
                title: isLetter(item.original_title) ? item.original_title : item.title,
                vote_average: item.vote_average,
                vote_count: item.vote_count,
            };
        });

        const sidebarCard = [
            {
                adult: false,
                backdrop_path: '/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg',
                genre_ids: [35, 16, 10751, 10402],
                id: 438695,
                original_language: 'en',
                original_title: 'Sing 2',
                overview:
                    'Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.',
                popularity: 4053.564,
                poster_path: '/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg',
                release_date: '2021-12-01',
                title: 'Sing 2',
                video: false,
                vote_average: 8.3,
                vote_count: 1335,
            },
            {
                adult: false,
                backdrop_path: '/o76ZDm8PS9791XiuieNB93UZcRV.jpg',
                genre_ids: [27, 28, 878],
                id: 460458,
                original_language: 'en',
                original_title: 'Resident Evil: Welcome to Raccoon City',
                overview:
                    'Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.',
                popularity: 4076.337,
                poster_path: '/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg',
                release_date: '2021-11-24',
                title: 'Resident Evil: Welcome to Raccoon City',
                video: false,
                vote_average: 6.1,
                vote_count: 1014,
            },
            {
                adult: false,
                backdrop_path: '/usaZV7KB6Man9Rm9TyDAeQf7uVD.jpg',
                genre_ids: [27, 9648, 53],
                id: 646385,
                original_language: 'en',
                original_title: 'Scream',
                overview:
                    'Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.',
                popularity: 661.652,
                poster_path: '/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg',
                release_date: '2022-01-12',
                title: 'Scream',
                video: false,
                vote_average: 7.2,
                vote_count: 319,
            },
            {
                adult: false,
                backdrop_path: '/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg',
                genre_ids: [35, 16, 10751, 10402],
                id: 438695,
                original_language: 'en',
                original_title: 'Sing 2',
                overview:
                    'Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.',
                popularity: 4053.564,
                poster_path: '/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg',
                release_date: '2021-12-01',
                title: 'Sing 2',
                video: false,
                vote_average: 8.3,
                vote_count: 1335,
            },
            {
                adult: false,
                backdrop_path: '/o76ZDm8PS9791XiuieNB93UZcRV.jpg',
                genre_ids: [27, 28, 878],
                id: 460458,
                original_language: 'en',
                original_title: 'Resident Evil: Welcome to Raccoon City',
                overview:
                    'Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.',
                popularity: 4076.337,
                poster_path: '/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg',
                release_date: '2021-11-24',
                title: 'Resident Evil: Welcome to Raccoon City',
                video: false,
                vote_average: 6.1,
                vote_count: 1014,
            },
            {
                adult: false,
                backdrop_path: '/usaZV7KB6Man9Rm9TyDAeQf7uVD.jpg',
                genre_ids: [27, 9648, 53],
                id: 646385,
                original_language: 'en',
                original_title: 'Scream',
                overview:
                    'Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.',
                popularity: 661.652,
                poster_path: '/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg',
                release_date: '2022-01-12',
                title: 'Scream',
                video: false,
                vote_average: 7.2,
                vote_count: 319,
            },
        ];

        const sidebarData = sidebarCard
            .map((item) => {
                const imageExist = item.poster_path || item.backdrop_path;
                return {
                    id: item.id,
                    image: imageExist
                        ? `${imageBaseUrl}w500${imageExist}`
                        : 'https://via.placeholder.com/192x256.png?text=Dummy Image',
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    vote_average: item.vote_average,
                    vote_count: item.vote_count,
                };
            })
            .slice(-3);

        return {
            data,
            sidebarData,
            arrowBackIcon,
            starIcon,
            starHalfIcon,
            bookmarkOutlineIcon,
            eyeOutlineIcon,
            calendarOutlineIcon,
        };
    },
};
</script>
