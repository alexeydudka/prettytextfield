/*
 * JQuery Prettytextfield plugin, v1.0
 * Developed and maintanined by Alexey Dudka, alexeydudka@gmail.com
 */ 

;(function(factory){
    if (typeof define === 'function' && define.amd) {
        if ( typeof jQuery !== 'undefined' ) {
            define(['jquery'], factory);  
        } else {
            define([], factory);
        }
    } else {
        if ( typeof jQuery !== 'undefined' ) {
            factory(jQuery);
        } else {
            factory();
        }
    }
})(function($, undefined){
    "use strict";
        var prettytextfieldmap = [
        {
            "smiles-and-people":[
                {"id":"1f600","shortname":":grinning:","title":"grinning face"},
                {"id":"1f601","shortname":":grin:","title":"grinning face with smiling eyes"},
                {"id":"1f602","shortname":":joy:","title":"face with tears of joy"},
                /*{"id":"1f923","shortname":":rofl:","title":"rolling on the floor laughing"},*/
                {"id":"1f603","shortname":":smiley:","title":"smiling face with open mouth"},
                {"id":"1f604","shortname":":smile:","title":"smiling face with open mouth and smiling eyes"},
                {"id":"1f605","shortname":":sweat_smile:","title":"smiling face with open mouth and cold sweat"},
                {"id":"1f606","shortname":":laughing:","title":"smiling face with open mouth and tightly-closed eyes"},
                {"id":"1f609","shortname":":wink:","title":"winking face"},
                {"id":"1f60a","shortname":":blush:" ,"title":"smiling face with smiling eyes"},
                {"id":"1f60b","shortname":":yum:" ,"title":"face savouring delicious food"},
                {"id":"1f60e","shortname":":sunglasses:" ,"title":"smiling face with sunglasses"},
                {"id":"1f60d","shortname":":heart_eyes:" ,"title":"smiling face with heart-shaped eyes"},
                {"id":"1f618","shortname":":kissing_heart:" ,"title":"face throwing a kiss"},
                {"id":"1f617","shortname":":kissing:" ,"title":"kissing face"},
                {"id":"1f619","shortname":":kissing_smiling_eyes:" ,"title":"kissing face with smiling eyes"},
                {"id":"1f61a","shortname":":kissing_closed_eyes:" ,"title":"kissing face with closed eyes"},
                {"id":"263a","shortname":":relaxed:" ,"title":"white smiling face"},
                {"id":"1f642","shortname":":slight_smile:" ,"title":"slightly smiling face"},
                {"id":"1f917","shortname":":hugging:" ,"title":"hugging face"},
                {"id":"1f914","shortname":":thinking:" ,"title":"thinking face"},
                {"id":"1f610","shortname":":neutral_face:" ,"title":"neutral face"},
                {"id":"1f611","shortname":":expressionless:" ,"title":"expressionless face"},
                {"id":"1f636","shortname":":no_mouth:" ,"title":"face without mouth"},
                {"id":"1f644","shortname":":rolling_eyes:" ,"title":"face with rolling eyes"},
                {"id":"1f60f","shortname":":smirk:" ,"title":"smirking face"},
                {"id":"1f623","shortname":":persevere:" ,"title":"persevering face"},
                {"id":"1f625","shortname":":disappointed_relieved:" ,"title":"disappointed but relieved face"},
                {"id":"1f62e","shortname":":open_mouth:" ,"title":"face with open mouth"},
                {"id":"1f910","shortname":":zipper_mouth:" ,"title":"zipper-mouth face"},
                {"id":"1f62f","shortname":":hushed:" ,"title":"hushed face"},
                {"id":"1f62a","shortname":":sleepy:" ,"title":"sleepy face"},
                {"id":"1f62b","shortname":":tired_face:" ,"title":"tired face"},
                {"id":"1f634","shortname":":sleeping:" ,"title":"sleeping face"},
                {"id":"1f60c","shortname":":relieved:" ,"title":"relieved face"},
                {"id":"1f913","shortname":":nerd:" ,"title":"nerd face"},
                {"id":"1f61b","shortname":":stuck_out_tongue:" ,"title":"face with stuck-out tongue"},
                {"id":"1f61c","shortname":":stuck_out_tongue_winking_eye:" ,"title":"face with stuck-out tongue and winking eye"},
                {"id":"1f61d","shortname":":stuck_out_tongue_closed_eyes:" ,"title":"face with stuck-out tongue and tightly-closed eyes"},
                /*{"id":"1f924","shortname":":drooling_face:" ,"title":"drooling face"},*/
                {"id":"1f612","shortname":":unamused:" ,"title":"unamused face"},
                {"id":"1f613","shortname":":sweat:" ,"title":"face with cold sweat"},
                {"id":"1f614","shortname":":pensive:" ,"title":"pensive face"},
                {"id":"1f615","shortname":":confused:" ,"title":"confused face"},
                {"id":"1f643","shortname":":upside_down:" ,"title":"upside-down face"},
                {"id":"1f911","shortname":":money_mouth:" ,"title":"money-mouth face"},
                {"id":"1f632","shortname":":astonished:" ,"title":"astonished face"},
                {"id":"2639","shortname":":frowning2:" ,"title":"white frowning face"},
                {"id":"1f641","shortname":":slight_frown:" ,"title":"slightly frowning face"},
                {"id":"1f616","shortname":":confounded:" ,"title":"confounded face"},
                {"id":"1f61e","shortname":":disappointed:" ,"title":"disappointed face"},
                {"id":"1f61f","shortname":":worried:" ,"title":"worried face"},
                {"id":"1f624","shortname":":triumph:" ,"title":"face with look of triumph"},
                {"id":"1f622","shortname":":cry:" ,"title":"crying face"},
                {"id":"1f62d","shortname":":sob:" ,"title":"loudly crying face"},
                {"id":"1f626","shortname":":frowning:" ,"title":"frowning face with open mouth"},
                {"id":"1f627","shortname":":anguished:" ,"title":"anguished face"},
                {"id":"1f628","shortname":":fearful:" ,"title":"fearful face"},
                {"id":"1f629","shortname":":weary:" ,"title":"weary face"},
                {"id":"1f62c","shortname":":grimacing:" ,"title":"grimacing face"},
                {"id":"1f630","shortname":":cold_sweat:" ,"title":"face with open mouth and cold sweat"},
                {"id":"1f631","shortname":":scream:" ,"title":"face screaming in fear"},
                {"id":"1f633","shortname":":flushed:" ,"title":"flushed face"},
                {"id":"1f635","shortname":":dizzy_face:" ,"title":"dizzy face"},
                {"id":"1f621","shortname":":rage:" ,"title":"pouting face"},
                {"id":"1f620","shortname":":angry:" ,"title":"angry face"},
                {"id":"1f607","shortname":":innocent:" ,"title":"smiling face with halo"},
                /*{"id":"1f920","shortname":":cowboy:" ,"title":"face with cowboy hat"},
                {"id":"1f921","shortname":":clown:" ,"title":"clown face"},
                {"id":"1f925","shortname":":lying_face:" ,"title":"lying face"},*/
                {"id":"1f637","shortname":":mask:" ,"title":"face with medical mask"},
                {"id":"1f912","shortname":":thermometer_face:" ,"title":"face with thermometer"},
                {"id":"1f915","shortname":":head_bandage:" ,"title":"face with head-bandage"},
                /*{"id":"1f922","shortname":":nauseated_face:" ,"title":"nauseated face"},
                {"id":"1f927","shortname":":sneezing_face:" ,"title":"sneezing face"},*/
                {"id":"1f608","shortname":":smiling_imp:" ,"title":"smiling face with horns"},
                {"id":"1f47f","shortname":":imp:" ,"title":"imp"},
                {"id":"1f479","shortname":":japanese_ogre:" ,"title":"japanese ogre"},
                {"id":"1f47a","shortname":":japanese_goblin:" ,"title":"japanese goblin"},
                {"id":"1f480","shortname":":skull:" ,"title":"skull"},
                {"id":"1f47b","shortname":":ghost:" ,"title":"ghost"},
                {"id":"1f47d","shortname":":alien:" ,"title":"extraterrestrial alien"},
                {"id":"1f916","shortname":":robot:" ,"title":"robot face"},
                {"id":"1f4a9","shortname":":poop:" ,"title":"pile of poo"},
                {"id":"1f63a","shortname":":smiley_cat:" ,"title":"smiling cat face with open mouth"},
                {"id":"1f638","shortname":":smile_cat:" ,"title":"grinning cat face with smiling eyes"},
                {"id":"1f639","shortname":":joy_cat:" ,"title":"cat face with tears of joy"},
                {"id":"1f63b","shortname":":heart_eyes_cat:" ,"title":"smiling cat face with heart-shaped eyes"},
                {"id":"1f63c","shortname":":smirk_cat:" ,"title":"cat face with wry smile"},
                {"id":"1f63d","shortname":":kissing_cat:" ,"title":"kissing cat face with closed eyes"},
                {"id":"1f640","shortname":":scream_cat:" ,"title":"weary cat face"},
                {"id":"1f63f","shortname":":crying_cat_face:" ,"title":"crying cat face"},
                {"id":"1f63e","shortname":":pouting_cat:" ,"title":"pouting cat face"},
                {"id":"1f466","shortname":":boy:" ,"title":"boy"},
                {"id":"1f467","shortname":":girl:" ,"title":"girl"},
                {"id":"1f468","shortname":":man:" ,"title":"man"},
                {"id":"1f469","shortname":":woman:" ,"title":"woman"},
                {"id":"1f474","shortname":":older_man:" ,"title":"older man"},
                {"id":"1f475","shortname":":older_woman:" ,"title":"older woman"},
                {"id":"1f476","shortname":":baby:","title":"baby"},
                {"id":"1f47c","shortname":":angel:","title":"baby angel"},
                {"id":"1f46e","shortname":":cop:","title":"police officer"},
                {"id":"1f575","shortname":":spy:","title":"sleuth or spy"},
                {"id":"1f482","shortname":":guardsman:","title":"guardsman"},
                {"id":"1f477","shortname":":construction_worker:","title":"construction worker"},
                {"id":"1f473","shortname":":man_with_turban:","title":"man with turban"},
                {"id":"1f471","shortname":":person_with_blond_hair:","title":"person with blond hair"},
                {"id":"1f385","shortname":":santa:","title":"father christmas"},
                /*{"id":"1f936","shortname":":mrs_claus:","title":"mother christmas"},*/
                {"id":"1f478","shortname":":princess:","title":"princess"},
                /*{"id":"1f934","shortname":":prince:","title":"prince"},*/
                {"id":"1f470","shortname":":bride_with_veil:","title":"bride with veil"},
                /*{"id":"1f935","shortname":":man_in_tuxedo:","title":"man in tuxedo"},
                {"id":"1f930","shortname":":pregnant_woman:","title":"pregnant woman"},*/
                {"id":"1f472","shortname":":man_with_gua_pi_mao:","title":"man with gua pi mao"},
                {"id":"1f64d","shortname":":person_frowning:","title":"person frowning"},
                {"id":"1f64e","shortname":":person_with_pouting_face:","title":"person with pouting face"},
                {"id":"1f645","shortname":":no_good:","title":"face with no good gesture"},
                {"id":"1f646","shortname":":ok_woman:","title":"face with ok gesture"},
                {"id":"1f481","shortname":":information_desk_person:","title":"information desk person"},
                {"id":"1f64b","shortname":":raising_hand:","title":"happy person raising one hand"},
                {"id":"1f647","shortname":":bow:","title":"person bowing deeply"},
                /*{"id":"1f926","shortname":":face_palm:","title":"face palm"},
                {"id":"1f937","shortname":":shrug:","title":"shrug"},*/
                {"id":"1f486","shortname":":massage:","title":"face massage"},
                {"id":"1f487","shortname":":haircut:","title":"haircut"},
                {"id":"1f6b6","shortname":":walking:","title":"pedestrian"},
                {"id":"1f3c3","shortname":":runner:","title":"runner"},
                {"id":"1f483","shortname":":dancer:","title":"dancer"},
                /*{"id":"1f57a","shortname":":man_dancing:","title":"man dancing"},*/
                {"id":"1f46f","shortname":":dancers:","title":"woman with bunny ears"},
                {"id":"1f5e3","shortname":":speaking_head:","title":"speaking head in silhouette"},
                {"id":"1f464","shortname":":bust_in_silhouette:","title":"bust in silhouette"},
                {"id":"1f465","shortname":":busts_in_silhouette:","title":"busts in silhouette"},
                {"id":"1f46b","shortname":":couple:","title":"man and woman holding hands"},
                {"id":"1f46c","shortname":":two_men_holding_hands:","title":"two men holding hands"},
                {"id":"1f46d","shortname":":two_women_holding_hands:","title":"two women holding hands"},
                {"id":"1f48f","shortname":":couplekiss:","title":"kiss"},
                {"id":"1f491","shortname":":couple_with_heart:","title":"couple with heart"},
                {"id":"1f46a","shortname":":family:","title":"family"},
                {"id":"1f4aa","shortname":":muscle:","title":"flexed biceps"},
                /*{"id":"1f933","shortname":":selfie:","title":"selfie"},*/
                {"id":"1f448","shortname":":point_left:","title":"white left pointing backhand index"},
                {"id":"1f449","shortname":":point_right:","title":"white right pointing backhand index"},
                {"id":"261d","shortname":":point_up:","title":"white up pointing index"},
                {"id":"1f446","shortname":":point_up_2:","title":"white up pointing backhand index"},
                {"id":"1f595","shortname":":middle_finger:","title":"reversed hand with middle finger extended"},
                {"id":"1f447","shortname":":point_down:","title":"white down pointing backhand index"},
                {"id":"270c","shortname":":v:","title":"victory hand"},
                /*{"id":"1f91e","shortname":":fingers_crossed:","title":"hand with first and index finger crossed"},*/
                {"id":"1f596","shortname":":vulcan:","title":"raised hand with part between middle and ring fingers"},
                {"id":"1f918","shortname":":metal:","title":"sign of the horns"},
                /*{"id":"1f919","shortname":":call_me:","title":"call me hand"},*/
                {"id":"1f590","shortname":":hand_splayed:","title":"raised hand with fingers splayed"},
                {"id":"270b","shortname":":raised_hand:","title":"raised hand"},
                {"id":"1f44c","shortname":":ok_hand:","title":"ok hand sign"},
                {"id":"1f44d","shortname":":thumbsup:","title":"thumbs up sign"},
                {"id":"1f44e","shortname":":thumbsdown:","title":"thumbs down sign"},
                {"id":"270a","shortname":":fist:","title":"raised fist"},
                {"id":"1f44a","shortname":":punch:","title":"fisted hand sign"},
                /*{"id":"1f91b","shortname":":left_facing_fist:","title":"left-facing fist"},
                {"id":"1f91c","shortname":":right_facing_fist:","title":"right-facing fist"},
                {"id":"1f91a","shortname":":raised_back_of_hand:","title":"raised back of hand"},*/
                {"id":"1f44b","shortname":":wave:","title":"waving hand sign"},
                {"id":"1f44f","shortname":":clap:","title":"clapping hands sign"},
                {"id":"270d","shortname":":writing_hand:","title":"writing hand"},
                {"id":"1f450","shortname":":open_hands:","title":"open hands sign"},
                {"id":"1f64c","shortname":":raised_hands:","title":"person raising both hands in celebration"},
                {"id":"1f64f","shortname":":pray:","title":"person with folded hands"},
                {"id":"1f91d","shortname":":handshake:","title":"handshake"},
                /*{"id":"1f485","shortname":":nail_care:","title":"nail polish"},*/
                {"id":"1f442","shortname":":ear:","title":"ear"},
                {"id":"1f443","shortname":":nose:","title":"nose"},
                {"id":"1f463","shortname":":footprints:","title":"footprints"},
                {"id":"1f440","shortname":":eyes:","title":"eyes"},
                {"id":"1f441","shortname":":eye:","title":"eye"},
                {"id":"1f445","shortname":":tongue:","title":"tongue"},
                {"id":"1f444","shortname":":lips:","title":"mouth"},
                {"id":"1f48b","shortname":":kiss:","title":"kiss mark"},
                {"id":"1f4a4","shortname":":zzz:","title":"sleeping symbol"},
                {"id":"1f453","shortname":":eyeglasses:","title":"eyeglasses"},
                {"id":"1f576","shortname":":dark_sunglasses:","title":"dark sunglasses"},
                {"id":"1f454","shortname":":necktie:","title":"necktie"},
                {"id":"1f455","shortname":":shirt:","title":"t-shirt"},
                {"id":"1f456","shortname":":jeans:","title":"jeans"},
                {"id":"1f457","shortname":":dress:","title":"dress"},
                {"id":"1f458","shortname":":kimono:","title":"kimono"},
                {"id":"1f459","shortname":":bikini:","title":"bikini"},
                {"id":"1f45a","shortname":":womans_clothes:","title":"womans clothes"},
                {"id":"1f45b","shortname":":purse:","title":"purse"},
                {"id":"1f45c","shortname":":handbag:","title":"handbag"},
                {"id":"1f45d","shortname":":pouch:","title":"pouch"},
                {"id":"1f392","shortname":":school_satchel:","title":"school satchel"},
                {"id":"1f45e","shortname":":mans_shoe:","title":"mans shoe"},
                {"id":"1f45f","shortname":":athletic_shoe:","title":"athletic shoe"},
                {"id":"1f460","shortname":":high_heel:","title":"high-heeled shoe"},
                {"id":"1f461","shortname":":sandal:","title":"womans sandal"},
                {"id":"1f462","shortname":":boot:","title":"womans boots"},
                {"id":"1f451","shortname":":crown:","title":"crown"},
                {"id":"1f452","shortname":":womans_hat:","title":"womans hat"},
                {"id":"1f3a9","shortname":":tophat:","title":"top hat"},
                {"id":"1f393","shortname":":mortar_board:","title":"graduation cap"},
                {"id":"26d1","shortname":":helmet_with_cross:","title":"helmet with white cross"},
                {"id":"1f484","shortname":":lipstick:","title":"lipstick"},
                {"id":"1f48d","shortname":":ring:","title":"ring"},
                {"id":"1f302","shortname":":closed_umbrella:","title":"closed umbrella"},
                {"id":"1f4bc","shortname":":briefcase:","title":"briefcase"},
            ]
        },
        {
            "popular-emojis":[
                {"id":"1f60a","shortname":":blush:" ,"title":"smiling face with smiling eyes"},
                {"id":"1f60b","shortname":":yum:" ,"title":"face savouring delicious food"},
                {"id":"1f60d","shortname":":heart_eyes:" ,"title":"smiling face with heart-shaped eyes"},
                {"id":"1f60e","shortname":":sunglasses:" ,"title":"smiling face with sunglasses"},
                {"id":"1f917","shortname":":hugging:" ,"title":"hugging face"},
                {"id":"1f618","shortname":":kissing_heart:" ,"title":"face throwing a kiss"},
                {"id":"1f625","shortname":":disappointed_relieved:" ,"title":"disappointed but relieved face"},
                {"id":"1f622","shortname":":cry:" ,"title":"crying face"},
                {"id":"1f48f","shortname":":couplekiss:","title":"kiss"},
                {"id":"1f491","shortname":":couple_with_heart:","title":"couple with heart"},
                {"id":"1f490","shortname":":bouquet:","title":"bouquet"},
                {"id":"1f337","shortname":":tulip:","title":"tulip"},
                {"id":"1f33c","shortname":":blossom:","title":"blossom"},
                {"id":"1f498","shortname":":cupid:","title":"heart with arrow"},
                {"id":"2764","shortname":":heart:","title":"heavy black heart"},
                {"id":"1f493","shortname":":heartbeat:","title":"beating heart"},
                {"id":"1f494","shortname":":broken_heart:","title":"broken heart"},
                {"id":"1f382","shortname":":birthday:","title":"birthday cake"},
                {"id":"1f369","shortname":":doughnut:","title":"doughnut"},
                {"id":"1f495","shortname":":two_hearts:","title":"two hearts"},
                {"id":"1f496","shortname":":sparkling_heart:","title":"sparkling heart"},
                {"id":"1f497","shortname":":heartpulse:","title":"growing heart"},
                {"id":"1f49d","shortname":":gift_heart:","title":"heart with ribbon"},
                {"id":"1f49e","shortname":":revolving_hearts:","title":"revolving hearts"},
                {"id":"1f49f","shortname":":heart_decoration:","title":"heart decoration"},
                {"id":"2763","shortname":":heart_exclamation:","title":"heavy heart exclamation mark ornament"},
                {"id":"1f4ae","shortname":":white_flower:","title":"white flower"},
                {"id":"2665","shortname":":hearts:","title":"black heart suit"},
                {"id":"262f","shortname":":yin_yang:","title":"yin yang"},
                {"id":"203c","shortname":":bangbang:","title":"double exclamation mark"},
                {"id":"2049","shortname":":interrobang:","title":"exclamation question mark"},
                {"id":"2753","shortname":":question:","title":"black question mark ornament"},
                {"id":"1f37b","shortname":":beers:","title":"clinking beer mugs"},
                {"id":"1f379","shortname":":tropical_drink:","title":"tropical drink"},
                {"id":"1f378","shortname":":cocktail:","title":"cocktail glass"},
                {"id":"1f37e","shortname":":champagne:","title":"bottle with popping cork"},
                {"id":"1f3e9","shortname":":love_hotel:","title":"love hotel"},
                {"id":"1f48c","shortname":":love_letter:","title":"love letter"},
                {"id":"1f380","shortname":":ribbon:","title":"ribbon"},
                {"id":"270f","shortname":":pencil2:","title":"pencil"},
                {"id":"1f511","shortname":":key:","title":"key"},
            ]
        },
        {
            "animals-and-nature":[
                {"id":"1f648","shortname":":see_no_evil:","title":"see-no-evil monkey"},
                {"id":"1f649","shortname":":hear_no_evil:","title":"hear-no-evil monkey"},
                {"id":"1f64a","shortname":":speak_no_evil:","title":"speak-no-evil monkey"},
                {"id":"1f4a6","shortname":":sweat_drops:","title":"splashing sweat symbol"},
                {"id":"1f4a8","shortname":":dash:","title":"dash symbol"},
                {"id":"1f435","shortname":":monkey_face:","title":"monkey face"},
                {"id":"1f412","shortname":":monkey:","title":"monkey"},
                /*{"id":"1f98d","shortname":":gorilla:","title":"gorilla"},*/
                {"id":"1f436","shortname":":dog:","title":"dog face"},
                {"id":"1f415","shortname":":dog2:","title":"dog"},
                {"id":"1f429","shortname":":poodle:","title":"poodle"},
                {"id":"1f43a","shortname":":wolf:","title":"wolf face"},
                /*{"id":"1f98a","shortname":":fox:","title":"fox face"},*/
                {"id":"1f431","shortname":":cat:","title":"cat face"},
                {"id":"1f408","shortname":":cat2:","title":"cat"},
                {"id":"1f981","shortname":":lion_face:","title":"lion face"},
                {"id":"1f42f","shortname":":tiger:","title":"tiger face"},
                {"id":"1f405","shortname":":tiger2:","title":"tiger"},
                {"id":"1f406","shortname":":leopard:","title":"leopard"},
                {"id":"1f434","shortname":":horse:","title":"horse face"},
                {"id":"1f40e","shortname":":racehorse:","title":"horse"},
                /*{"id":"1f98c","shortname":":deer:","title":"deer"},*/
                {"id":"1f984","shortname":":unicorn:","title":"unicorn face"},
                {"id":"1f42e","shortname":":cow:","title":"cow face"},
                {"id":"1f402","shortname":":ox:","title":"ox"},
                {"id":"1f403","shortname":":water_buffalo:","title":"water buffalo"},
                {"id":"1f404","shortname":":cow2:","title":"cow"},
                {"id":"1f437","shortname":":pig:","title":"pig face"},
                {"id":"1f416","shortname":":pig2:","title":"pig"},
                {"id":"1f417","shortname":":boar:","title":"boar"},
                {"id":"1f43d","shortname":":pig_nose:","title":"pig nose"},
                {"id":"1f40f","shortname":":ram:","title":"ram"},
                {"id":"1f411","shortname":":sheep:","title":"sheep"},
                {"id":"1f410","shortname":":goat:","title":"goat"},
                {"id":"1f42a","shortname":":dromedary_camel:","title":"dromedary camel"},
                {"id":"1f42b","shortname":":camel:","title":"bactrian camel"},
                {"id":"1f418","shortname":":elephant:","title":"elephant"},
                /*{"id":"1f98f","shortname":":rhino:","title":"rhinoceros"},*/
                {"id":"1f42d","shortname":":mouse:","title":"mouse face"},
                {"id":"1f401","shortname":":mouse2:","title":"mouse"},
                {"id":"1f400","shortname":":rat:","title":"rat"},
                {"id":"1f439","shortname":":hamster:","title":"hamster face"},
                {"id":"1f430","shortname":":rabbit:","title":"rabbit face"},
                /*{"id":"1f407","shortname":":rabbit2:","title":"rabbit"},
                {"id":"1f43f","shortname":":chipmunk:","title":"chipmunk"},*/
                {"id":"1f987","shortname":":bat:","title":"bat"},
                {"id":"1f43b","shortname":":bear:","title":"bear face"},
                {"id":"1f428","shortname":":koala:","title":"koala"},
                {"id":"1f43c","shortname":":panda_face:","title":"panda face"},
                {"id":"1f43e","shortname":":feet:","title":"paw prints"},
                {"id":"1f983","shortname":":turkey:","title":"turkey"},
                {"id":"1f414","shortname":":chicken:","title":"chicken"},
                {"id":"1f413","shortname":":rooster:","title":"rooster"},
                {"id":"1f423","shortname":":hatching_chick:","title":"hatching chick"},
                {"id":"1f424","shortname":":baby_chick:","title":"baby chick"},
                {"id":"1f425","shortname":":hatched_chick:","title":"front-facing baby chick"},
                {"id":"1f426","shortname":":bird:","title":"bird"},
                {"id":"1f427","shortname":":penguin:","title":"penguin"},
                {"id":"1f54a","shortname":":dove:","title":"dove of peace"},
                /*{"id":"1f985","shortname":":eagle:","title":"eagle"},
                {"id":"1f986","shortname":":duck:","title":"duck"},
                {"id":"1f989","shortname":":owl:","title":"owl"},*/
                {"id":"1f438","shortname":":frog:","title":"frog face"},
                {"id":"1f40a","shortname":":crocodile:","title":"crocodile"},
                {"id":"1f422","shortname":":turtle:","title":"turtle"},
                /*{"id":"1f98e","shortname":":lizard:","title":"lizard"},*/
                {"id":"1f40d","shortname":":snake:","title":"snake"},
                {"id":"1f432","shortname":":dragon_face:","title":"dragon face"},
                {"id":"1f409","shortname":":dragon:","title":"dragon"},
                {"id":"1f433","shortname":":whale:","title":"spouting whale"},
                {"id":"1f40b","shortname":":whale2:","title":"whale"},
                {"id":"1f42c","shortname":":dolphin:","title":"dolphin"},
                {"id":"1f41f","shortname":":fish:","title":"fish"},
                {"id":"1f420","shortname":":tropical_fish:","title":"tropical fish"},
                {"id":"1f421","shortname":":blowfish:","title":"blowfish"},
                /*{"id":"1f988","shortname":":shark:","title":"shark"},*/
                {"id":"1f419","shortname":":octopus:","title":"octopus"},
                {"id":"1f41a","shortname":":shell:","title":"spiral shell"},
                {"id":"1f980","shortname":":crab:","title":"crab"},
                /*{"id":"1f990","shortname":":shrimp:","title":"shrimp"},
                {"id":"1f991","shortname":":squid:","title":"squid"},
                {"id":"1f98b","shortname":":butterfly:","title":"butterfly"},*/
                {"id":"1f40c","shortname":":snail:","title":"snail"},
                {"id":"1f41b","shortname":":bug:","title":"bug"},
                {"id":"1f41c","shortname":":ant:","title":"ant"},
                {"id":"1f41d","shortname":":bee:","title":"honeybee"},
                {"id":"1f41e","shortname":":beetle:","title":"lady beetle"},
                {"id":"1f577","shortname":":spider:","title":"spider"},
                {"id":"1f578","shortname":":spider_web:","title":"spider web"},
                {"id":"1f982","shortname":":scorpion:","title":"scorpion"},
                {"id":"1f490","shortname":":bouquet:","title":"bouquet"},
                {"id":"1f338","shortname":":cherry_blossom:","title":"cherry blossom"},
                {"id":"1f3f5","shortname":":rosette:","title":"rosette"},
                {"id":"1f339","shortname":":rose:","title":"rose"},
                /*{"id":"1f940","shortname":":wilted_rose:","title":"wilted flower"},*/
                {"id":"1f33a","shortname":":hibiscus:","title":"hibiscus"},
                {"id":"1f33b","shortname":":sunflower:","title":"sunflower"},
                {"id":"1f33c","shortname":":blossom:","title":"blossom"},
                {"id":"1f337","shortname":":tulip:","title":"tulip"},
                {"id":"1f331","shortname":":seedling:","title":"seedling"},
                {"id":"1f332","shortname":":evergreen_tree:","title":"evergreen tree"},
                {"id":"1f333","shortname":":deciduous_tree:","title":"deciduous tree"},
                {"id":"1f334","shortname":":palm_tree:","title":"palm tree"},
                {"id":"1f335","shortname":":cactus:","title":"cactus"},
                {"id":"1f33e","shortname":":ear_of_rice:","title":"ear of rice"},
                {"id":"1f33f","shortname":":herb:","title":"herb"},
                {"id":"2618","shortname":":shamrock:","title":"shamrock"},
                {"id":"1f340","shortname":":four_leaf_clover:","title":"four leaf clover"},
                {"id":"1f341","shortname":":maple_leaf:","title":"maple leaf"},
                {"id":"1f342","shortname":":fallen_leaf:","title":"fallen leaf"},
                {"id":"1f343","shortname":":leaves:","title":"leaf fluttering in wind"},
                {"id":"1f344","shortname":":mushroom:","title":"mushroom"},
                {"id":"1f330","shortname":":chestnut:","title":"chestnut"},
                {"id":"1f30d","shortname":":earth_africa:","title":"earth globe europe-africa"},
                {"id":"1f30e","shortname":":earth_americas:","title":"earth globe americas"},
                {"id":"1f30f","shortname":":earth_asia:","title":"earth globe asia-australia"},
                {"id":"1f311","shortname":":new_moon:","title":"new moon symbol"},
                {"id":"1f312","shortname":":waxing_crescent_moon:","title":"waxing crescent moon symbol"},
                {"id":"1f313","shortname":":first_quarter_moon:","title":"first quarter moon symbol"},
                {"id":"1f314","shortname":":waxing_gibbous_moon:","title":"waxing gibbous moon symbol"},
                {"id":"1f315","shortname":":full_moon:","title":"full moon symbol"},
                {"id":"1f316","shortname":":waning_gibbous_moon:","title":"waning gibbous moon symbol"},
                {"id":"1f317","shortname":":last_quarter_moon:","title":"last quarter moon symbol"},
                {"id":"1f318","shortname":":waning_crescent_moon:","title":"waning crescent moon symbol"},
                {"id":"1f319","shortname":":crescent_moon:","title":"crescent moon"},
                {"id":"1f31a","shortname":":new_moon_with_face:","title":"new moon with face"},
                {"id":"1f31b","shortname":":first_quarter_moon_with_face:","title":"first quarter moon with face"},
                {"id":"1f31c","shortname":":last_quarter_moon_with_face:","title":"last quarter moon with face"},
                {"id":"2600","shortname":":sunny:","title":"black sun with rays"},
                {"id":"1f31d","shortname":":full_moon_with_face:","title":"full moon with face"},
                {"id":"1f31e","shortname":":sun_with_face:","title":"sun with face"},
                {"id":"2b50","shortname":":star:","title":"white medium star"},
                {"id":"1f31f","shortname":":star2:","title":"glowing star"},
                {"id":"2601","shortname":":cloud:","title":"cloud"},
                {"id":"26c5","shortname":":partly_sunny:","title":"sun behind cloud"},
                {"id":"26c8","shortname":":thunder_cloud_rain:","title":"thunder cloud and rain"},
                {"id":"1f324","shortname":":white_sun_small_cloud:","title":"white sun with small cloud"},
                {"id":"1f325","shortname":":white_sun_cloud:","title":"white sun behind cloud"},
                {"id":"1f326","shortname":":white_sun_rain_cloud:","title":"white sun behind cloud with rain"},
                {"id":"1f327","shortname":":cloud_rain:","title":"cloud with rain"},
                {"id":"1f328","shortname":":cloud_snow:","title":"cloud with snow"},
                {"id":"1f329","shortname":":cloud_lightning:","title":"cloud with lightning"},
                {"id":"1f32a","shortname":":cloud_tornado:","title":"cloud with tornado"},
                {"id":"1f32b","shortname":":fog:","title":"fog"},
                {"id":"1f32c","shortname":":wind_blowing_face:","title":"wind blowing face"},
                {"id":"2602","shortname":":umbrella2:","title":"umbrella"},
                {"id":"2614","shortname":":umbrella:","title":"umbrella with rain drops"},
                {"id":"26a1","shortname":":zap:","title":"high voltage sign"},
                {"id":"2744","shortname":":snowflake:","title":"snowflake"},
                {"id":"2603","shortname":":snowman2:","title":"snowman"},
                {"id":"26c4","shortname":":snowman:","title":"snowman without snow"},
                {"id":"2604","shortname":":comet:","title":"comet"},
                {"id":"1f525","shortname":":fire:","title":"fire"},
                {"id":"1f4a7","shortname":":droplet:","title":"droplet"},
                {"id":"1f30a","shortname":":ocean:","title":"water wave"},
                {"id":"1f383","shortname":":jack_o_lantern:","title":"jack-o-lantern"},
                {"id":"1f384","shortname":":christmas_tree:","title":"christmas tree"},
                {"id":"2728","shortname":":sparkles:","title":"sparkles"},
                {"id":"1f38b","shortname":":tanabata_tree:","title":"tanabata tree"},
                {"id":"1f38d","shortname":":bamboo:","title":"pine decoration"},
            ]
        },
        {
            "food-and-drink":[
                {"id":"1f347","shortname":":grapes:","title":"grapes"},
                {"id":"1f348","shortname":":melon:","title":"melon"},
                {"id":"1f349","shortname":":watermelon:","title":"watermelon"},
                {"id":"1f34a","shortname":":tangerine:","title":"tangerine"},
                {"id":"1f34b","shortname":":lemon:","title":"lemon"},
                {"id":"1f34c","shortname":":banana:","title":"banana"},
                {"id":"1f34d","shortname":":pineapple:","title":"pineapple"},
                {"id":"1f34e","shortname":":apple:","title":"red apple"},
                {"id":"1f34f","shortname":":green_apple:","title":"green apple"},
                {"id":"1f350","shortname":":pear:","title":"pear"},
                {"id":"1f351","shortname":":peach:","title":"peach"},
                {"id":"1f352","shortname":":cherries:","title":"cherries"},
                {"id":"1f353","shortname":":strawberry:","title":"strawberry"},
                /*{"id":"1f95d","shortname":":kiwi:","title":"kiwifruit"},*/
                {"id":"1f345","shortname":":tomato:","title":"tomato"},
                /*{"id":"1f951","shortname":":avocado:","title":"avocado"},*/
                {"id":"1f346","shortname":":eggplant:","title":"aubergine"},
                /*{"id":"1f954","shortname":":potato:","title":"potato"},
                {"id":"1f955","shortname":":carrot:","title":"carrot"},*/
                {"id":"1f33d","shortname":":corn:","title":"ear of maize"},
                {"id":"1f336","shortname":":hot_pepper:","title":"hot pepper"},
                /*{"id":"1f952","shortname":":cucumber:","title":"cucumber"},
                {"id":"1f95c","shortname":":peanuts:","title":"peanuts"},*/
                {"id":"1f35e","shortname":":bread:","title":"bread"},
                /*{"id":"1f950","shortname":":croissant:","title":"croissant"},
                {"id":"1f956","shortname":":french_bread:","title":"baguette bread"},
                {"id":"1f95e","shortname":":pancakes:","title":"pancakes"},*/
                {"id":"1f9c0","shortname":":cheese:","title":"cheese wedge"},
                {"id":"1f356","shortname":":meat_on_bone:","title":"meat on bone"},
                {"id":"1f357","shortname":":poultry_leg:","title":"poultry leg"},
                /*{"id":"1f953","shortname":":bacon:","title":"bacon"},*/
                {"id":"1f354","shortname":":hamburger:","title":"hamburger"},
                {"id":"1f35f","shortname":":fries:","title":"french fries"},
                {"id":"1f355","shortname":":pizza:","title":"slice of pizza"},
                {"id":"1f32d","shortname":":hotdog:","title":"hot dog"},
                {"id":"1f32e","shortname":":taco:","title":"taco"},
                {"id":"1f32f","shortname":":burrito:","title":"burrito"},
                /*{"id":"1f959","shortname":":stuffed_flatbread:","title":"stuffed flatbread"},
                {"id":"1f95a","shortname":":egg:","title":"egg"},*/
                {"id":"1f373","shortname":":cooking:","title":"cooking"},
                /*{"id":"1f958","shortname":":shallow_pan_of_food:","title":"shallow pan of food"},*/
                {"id":"1f372","shortname":":stew:","title":"pot of food"},
                /*{"id":"1f957","shortname":":salad:","title":"green salad"},*/
                {"id":"1f37f","shortname":":popcorn:","title":"popcorn"},
                {"id":"1f371","shortname":":bento:","title":"bento box"},
                {"id":"1f358","shortname":":rice_cracker:","title":"rice cracker"},
                {"id":"1f359","shortname":":rice_ball:","title":"rice ball"},
                {"id":"1f35a","shortname":":rice:","title":"cooked rice"},
                {"id":"1f35b","shortname":":curry:","title":"curry and rice"},
                {"id":"1f35c","shortname":":ramen:","title":"steaming bowl"},
                {"id":"1f35d","shortname":":spaghetti:","title":"spaghetti"},
                {"id":"1f360","shortname":":sweet_potato:","title":"roasted sweet potato"},
                {"id":"1f362","shortname":":oden:","title":"oden"},
                {"id":"1f363","shortname":":sushi:","title":"sushi"},
                {"id":"1f364","shortname":":fried_shrimp:","title":"fried shrimp"},
                {"id":"1f365","shortname":":fish_cake:","title":"fish cake with swirl design"},
                {"id":"1f361","shortname":":dango:","title":"dango"},
                {"id":"1f366","shortname":":icecream:","title":"soft ice cream"},
                {"id":"1f367","shortname":":shaved_ice:","title":"shaved ice"},
                {"id":"1f368","shortname":":ice_cream:","title":"ice cream"},
                {"id":"1f369","shortname":":doughnut:","title":"doughnut"},
                {"id":"1f36a","shortname":":cookie:","title":"cookie"},
                {"id":"1f382","shortname":":birthday:","title":"birthday cake"},
                {"id":"1f370","shortname":":cake:","title":"shortcake"},
                {"id":"1f36b","shortname":":chocolate_bar:","title":"chocolate bar"},
                {"id":"1f36c","shortname":":candy:","title":"candy"},
                {"id":"1f36d","shortname":":lollipop:","title":"lollipop"},
                {"id":"1f36e","shortname":":custard:","title":"custard"},
                {"id":"1f36f","shortname":":honey_pot:","title":"honey pot"},
                {"id":"1f37c","shortname":":baby_bottle:","title":"baby bottle"},
                /*{"id":"1f95b","shortname":":milk:","title":"glass of milk"},*/
                {"id":"2615","shortname":":coffee:","title":"hot beverage"},
                {"id":"1f375","shortname":":tea:","title":"teacup without handle"},
                {"id":"1f376","shortname":":sake:","title":"sake bottle and cup"},
                {"id":"1f37e","shortname":":champagne:","title":"bottle with popping cork"},
                {"id":"1f377","shortname":":wine_glass:","title":"wine glass"},
                {"id":"1f378","shortname":":cocktail:","title":"cocktail glass"},
                {"id":"1f379","shortname":":tropical_drink:","title":"tropical drink"},
                {"id":"1f37a","shortname":":beer:","title":"beer mug"},
                {"id":"1f37b","shortname":":beers:","title":"clinking beer mugs"},
                /*{"id":"1f942","shortname":":champagne_glass:","title":"clinking glasses"},
                {"id":"1f943","shortname":":tumbler_glass:","title":"tumbler glass"},*/
                {"id":"1f37d","shortname":":fork_knife_plate:","title":"fork and knife with plate"},
                {"id":"1f374","shortname":":fork_and_knife:","title":"fork and knife"},
                /*{"id":"1f944","shortname":":spoon:","title":"spoon"},*/
            ]
        },
        {
            "activity-and-sports":[
                {"id":"1f47e","shortname":":space_invader:","title":"alien monster"},
                {"id":"1f574","shortname":":levitate:","title":"man in business suit levitating"},
                /*{"id":"1f93a","shortname":":fencer:","title":"fencer"},*/
                {"id":"1f3c7","shortname":":horse_racing:","title":"horse racing"},
                {"id":"26f7","shortname":":skier:","title":"skier"},
                {"id":"1f3c2","shortname":":snowboarder:","title":"snowboarder"},
                {"id":"1f3cc","shortname":":golfer:","title":"golfer"},
                {"id":"1f3c4","shortname":":surfer:","title":"surfer"},
                {"id":"1f6a3","shortname":":rowboat:","title":"rowboat"},
                {"id":"1f3ca","shortname":":swimmer:","title":"swimmer"},
                {"id":"26f9","shortname":":basketball_player:","title":"person with ball"},
                {"id":"1f3cb","shortname":":lifter:","title":"weight lifter"},
                {"id":"1f6b4","shortname":":bicyclist:","title":"bicyclist"},
                {"id":"1f6b5","shortname":":mountain_bicyclist:","title":"mountain bicyclist"},
                /*{"id":"1f938","shortname":":cartwheel:","title":"person doing cartwheel"},
                {"id":"1f93c","shortname":":wrestlers:","title":"wrestlers"},
                {"id":"1f93d","shortname":":water_polo:","title":"water polo"},
                {"id":"1f93e","shortname":":handball:","title":"handball"},
                {"id":"1f939","shortname":":juggling:","title":"juggling"},*/
                {"id":"1f3aa","shortname":":circus_tent:","title":"circus tent"},
                {"id":"1f3ad","shortname":":performing_arts:","title":"performing arts"},
                {"id":"1f3a8","shortname":":art:","title":"artist palette"},
                {"id":"1f3b0","shortname":":slot_machine:","title":"slot machine"},
                {"id":"1f6c0","shortname":":bath:","title":"bath"},
                {"id":"1f397","shortname":":reminder_ribbon:","title":"reminder ribbon"},
                {"id":"1f39f","shortname":":tickets:","title":"admission tickets"},
                {"id":"1f3ab","shortname":":ticket:","title":"ticket"},
                {"id":"1f396","shortname":":military_medal:","title":"military medal"},
                {"id":"1f3c6","shortname":":trophy:","title":"trophy"},
                {"id":"1f3c5","shortname":":medal:","title":"sports medal"},
                /*{"id":"1f947","shortname":":first_place:","title":"first place medal"},
                {"id":"1f948","shortname":":second_place:","title":"second place medal"},
                {"id":"1f949","shortname":":third_place:","title":"third place medal"},*/
                {"id":"26bd","shortname":":soccer:","title":"soccer ball"},
                {"id":"26be","shortname":":baseball:","title":"baseball"},
                {"id":"1f3c0","shortname":":basketball:","title":"basketball and hoop"},
                {"id":"1f3d0","shortname":":volleyball:","title":"volleyball"},
                {"id":"1f3c8","shortname":":football:","title":"american football"},
                {"id":"1f3c9","shortname":":rugby_football:","title":"rugby football"},
                {"id":"1f3be","shortname":":tennis:","title":"tennis racquet and ball"},
                {"id":"1f3b1","shortname":":8ball:","title":"billiards"},
                {"id":"1f3b3","shortname":":bowling:","title":"bowling"},
                {"id":"1f3cf","shortname":":cricket:","title":"cricket bat and ball"},
                {"id":"1f3d1","shortname":":field_hockey:","title":"field hockey stick and ball"},
                {"id":"1f3d2","shortname":":hockey:","title":"ice hockey stick and puck"},
                {"id":"1f3d3","shortname":":ping_pong:","title":"table tennis paddle and ball"},
                {"id":"1f3f8","shortname":":badminton:","title":"badminton racquet"},
                /*{"id":"1f94a","shortname":":boxing_glove:","title":"boxing glove"},
                {"id":"1f94b","shortname":":martial_arts_uniform:","title":"martial arts uniform"},
                {"id":"1f945","shortname":":goal:","title":"goal net"},*/
                {"id":"1f3af","shortname":":dart:","title":"direct hit"},
                {"id":"26f3","shortname":":golf:","title":"flag in hole"},
                {"id":"26f8","shortname":":ice_skate:","title":"ice skate"},
                {"id":"1f3a3","shortname":":fishing_pole_and_fish:","title":"fishing pole and fish"},
                {"id":"1f3bd","shortname":":running_shirt_with_sash:","title":"running shirt with sash"},
                {"id":"1f3bf","shortname":":ski:","title":"ski and ski boot"},
                {"id":"1f3ae","shortname":":video_game:","title":"video game"},
                {"id":"1f3b2","shortname":":game_die:","title":"game die"},
                {"id":"1f3bc","shortname":":musical_score:","title":"musical score"},
                {"id":"1f3a4","shortname":":microphone:","title":"microphone"},
                {"id":"1f3a7","shortname":":headphones:","title":"headphone"},
                {"id":"1f3b7","shortname":":saxophone:","title":"saxophone"},
                {"id":"1f3b8","shortname":":guitar:","title":"guitar"},
                {"id":"1f3b9","shortname":":musical_keyboard:","title":"musical keyboard"},
                {"id":"1f3ba","shortname":":trumpet:","title":"trumpet"},
                {"id":"1f3bb","shortname":":violin:","title":"violin"},
                /*{"id":"1f941","shortname":":drum:","title":"drum with drumsticks"},*/
                {"id":"1f3ac","shortname":":clapper:","title":"clapper board"},
                {"id":"1f3f9","shortname":":bow_and_arrow:","title":"bow and arrow"},
            ]
        },
        {
            "travel-and-places":[
                {"id":"1f3ce","shortname":":race_car:","title":"racing car"},
                {"id":"1f3cd","shortname":":motorcycle:","title":"racing motorcycle"},
                {"id":"1f5fe","shortname":":japan:","title":"silhouette of japan"},
                {"id":"1f3d4","shortname":":mountain_snow:","title":"snow capped mountain"},
                {"id":"26f0","shortname":":mountain:","title":"mountain"},
                {"id":"1f30b","shortname":":volcano:","title":"volcano"},
                {"id":"1f5fb","shortname":":mount_fuji:","title":"mount fuji"},
                {"id":"1f3d5","shortname":":camping:","title":"camping"},
                {"id":"1f3d6","shortname":":beach:","title":"beach with umbrella"},
                {"id":"1f3dc","shortname":":desert:","title":"desert"},
                {"id":"1f3dd","shortname":":island:","title":"desert island"},
                {"id":"1f3de","shortname":":park:","title":"national park"},
                {"id":"1f3df","shortname":":stadium:","title":"stadium"},
                {"id":"1f3db","shortname":":classical_building:","title":"classical building"},
                {"id":"1f3d7","shortname":":construction_site:","title":"building construction"},
                {"id":"1f3d8","shortname":":homes:","title":"house buildings"},
                {"id":"1f3d9","shortname":":cityscape:","title":"cityscape"},
                {"id":"1f3da","shortname":":house_abandoned:","title":"derelict house building"},
                {"id":"1f3e0","shortname":":house:","title":"house building"},
                {"id":"1f3e1","shortname":":house_with_garden:","title":"house with garden"},
                {"id":"1f3e2","shortname":":office:","title":"office building"},
                {"id":"1f3e3","shortname":":post_office:","title":"japanese post office"},
                {"id":"1f3e4","shortname":":european_post_office:","title":"european post office"},
                {"id":"1f3e5","shortname":":hospital:","title":"hospital"},
                {"id":"1f3e6","shortname":":bank:","title":"bank"},
                {"id":"1f3e8","shortname":":hotel:","title":"hotel"},
                {"id":"1f3e9","shortname":":love_hotel:","title":"love hotel"},
                {"id":"1f3ea","shortname":":convenience_store:","title":"convenience store"},
                {"id":"1f3eb","shortname":":school:","title":"school"},
                {"id":"1f3ec","shortname":":department_store:","title":"department store"},
                {"id":"1f3ed","shortname":":factory:","title":"factory"},
                {"id":"1f3ef","shortname":":japanese_castle:","title":"japanese castle"},
                {"id":"1f3f0","shortname":":european_castle:","title":"european castle"},
                {"id":"1f492","shortname":":wedding:","title":"wedding"},
                {"id":"1f5fc","shortname":":tokyo_tower:","title":"tokyo tower"},
                {"id":"1f5fd","shortname":":statue_of_liberty:","title":"statue of liberty"},
                {"id":"26ea","shortname":":church:","title":"church"},
                {"id":"1f54c","shortname":":mosque:","title":"mosque"},
                {"id":"1f54d","shortname":":synagogue:","title":"synagogue"},
                {"id":"26e9","shortname":":shinto_shrine:","title":"shinto shrine"},
                {"id":"1f54b","shortname":":kaaba:","title":"kaaba"},
                {"id":"26f2","shortname":":fountain:","title":"fountain"},
                {"id":"26fa","shortname":":tent:","title":"tent"},
                {"id":"1f301","shortname":":foggy:","title":"foggy"},
                {"id":"1f303","shortname":":night_with_stars:","title":"night with stars"},
                {"id":"1f304","shortname":":sunrise_over_mountains:","title":"sunrise over mountains"},
                {"id":"1f305","shortname":":sunrise:","title":"sunrise"},
                {"id":"1f306","shortname":":city_dusk:","title":"cityscape at dusk"},
                {"id":"1f307","shortname":":city_sunset:","title":"sunset over buildings"},
                {"id":"1f309","shortname":":bridge_at_night:","title":"bridge at night"},
                {"id":"1f30c","shortname":":milky_way:","title":"milky way"},
                {"id":"1f3a0","shortname":":carousel_horse:","title":"carousel horse"},
                {"id":"1f3a1","shortname":":ferris_wheel:","title":"ferris wheel"},
                {"id":"1f3a2","shortname":":roller_coaster:","title":"roller coaster"},
                {"id":"1f682","shortname":":steam_locomotive:","title":"steam locomotive"},
                {"id":"1f683","shortname":":railway_car:","title":"railway car"},
                {"id":"1f684","shortname":":bullettrain_side:","title":"high-speed train"},
                {"id":"1f685","shortname":":bullettrain_front:","title":"high-speed train with bullet nose"},
                {"id":"1f686","shortname":":train2:","title":"train"},
                {"id":"1f687","shortname":":metro:","title":"metro"},
                {"id":"1f688","shortname":":light_rail:","title":"light rail"},
                {"id":"1f689","shortname":":station:","title":"station"},
                {"id":"1f68a","shortname":":tram:","title":"tram"},
                {"id":"1f69d","shortname":":monorail:","title":"monorail"},
                {"id":"1f69e","shortname":":mountain_railway:","title":"mountain railway"},
                {"id":"1f68b","shortname":":train:","title":"tram car"},
                {"id":"1f68c","shortname":":bus:","title":"bus"},
                {"id":"1f68d","shortname":":oncoming_bus:","title":"oncoming bus"},
                {"id":"1f68e","shortname":":trolleybus:","title":"trolleybus"},
                {"id":"1f690","shortname":":minibus:","title":"minibus"},
                {"id":"1f691","shortname":":ambulance:","title":"ambulance"},
                {"id":"1f692","shortname":":fire_engine:","title":"fire engine"},
                {"id":"1f693","shortname":":police_car:","title":"police car"},
                {"id":"1f694","shortname":":oncoming_police_car:","title":"oncoming police car"},
                {"id":"1f695","shortname":":taxi:","title":"taxi"},
                {"id":"1f696","shortname":":oncoming_taxi:","title":"oncoming taxi"},
                {"id":"1f697","shortname":":red_car:","title":"automobile"},
                {"id":"1f698","shortname":":oncoming_automobile:","title":"oncoming automobile"},
                {"id":"1f699","shortname":":blue_car:","title":"recreational vehicle"},
                {"id":"1f69a","shortname":":truck:","title":"delivery truck"},
                {"id":"1f69b","shortname":":articulated_lorry:","title":"articulated lorry"},
                {"id":"1f69c","shortname":":tractor:","title":"tractor"},
                {"id":"1f6b2","shortname":":bike:","title":"bicycle"},
                /*{"id":"1f6f4","shortname":":scooter:","title":"scooter"},
                {"id":"1f6f5","shortname":":motor_scooter:","title":"motor scooter"},*/
                {"id":"1f68f","shortname":":busstop:","title":"bus stop"},
                {"id":"1f6e3","shortname":":motorway:","title":"motorway"},
                {"id":"1f6e4","shortname":":railway_track:","title":"railway track"},
                {"id":"26fd","shortname":":fuelpump:","title":"fuel pump"},
                {"id":"1f6a8","shortname":":rotating_light:","title":"police cars revolving light"},
                {"id":"1f6a5","shortname":":traffic_light:","title":"horizontal traffic light"},
                {"id":"1f6a6","shortname":":vertical_traffic_light:","title":"vertical traffic light"},
                {"id":"1f6a7","shortname":":construction:","title":"construction sign"},
                {"id":"2693","shortname":":anchor:","title":"anchor"},
                {"id":"26f5","shortname":":sailboat:","title":"sailboat"},
                /*{"id":"1f6f6","shortname":":canoe:","title":"canoe"},*/
                {"id":"1f6a4","shortname":":speedboat:","title":"speedboat"},
                {"id":"1f6f3","shortname":":cruise_ship:","title":"passenger ship"},
                {"id":"26f4","shortname":":ferry:","title":"ferry"},
                {"id":"1f6e5","shortname":":motorboat:","title":"motorboat"},
                {"id":"1f6a2","shortname":":ship:","title":"ship"},
                {"id":"2708","shortname":":airplane:","title":"airplane"},
                {"id":"1f6e9","shortname":":airplane_small:","title":"small airplane"},
                {"id":"1f6eb","shortname":":airplane_departure:","title":"airplane departure"},
                {"id":"1f6ec","shortname":":airplane_arriving:","title":"airplane arriving"},
                {"id":"1f4ba","shortname":":seat:","title":"seat"},
                {"id":"1f681","shortname":":helicopter:","title":"helicopter"},
                {"id":"1f69f","shortname":":suspension_railway:","title":"suspension railway"},
                {"id":"1f6a0","shortname":":mountain_cableway:","title":"mountain cableway"},
                {"id":"1f6a1","shortname":":aerial_tramway:","title":"aerial tramway"},
                {"id":"1f680","shortname":":rocket:","title":"rocket"},
                {"id":"1f6f0","shortname":":satellite_orbital:","title":"satellite"},
                {"id":"1f320","shortname":":stars:","title":"shooting star"},
                {"id":"1f308","shortname":":rainbow:","title":"rainbow"},
                {"id":"1f386","shortname":":fireworks:","title":"fireworks"},
                {"id":"1f387","shortname":":sparkler:","title":"firework sparkler"},
                {"id":"1f391","shortname":":rice_scene:","title":"moon viewing ceremony"},
                {"id":"1f3c1","shortname":":checkered_flag:","title":"chequered flag"},
            ]
        },
        {
            "objects":[
                {"id":"2620","shortname":":skull_crossbones:","title":"skull and crossbones"},
                {"id":"1f48c","shortname":":love_letter:","title":"love letter"},
                {"id":"1f4a3","shortname":":bomb:","title":"bomb"},
                {"id":"1f573","shortname":":hole:","title":"hole"},
                {"id":"1f6cd","shortname":":shopping_bags:","title":"shopping bags"},
                {"id":"1f4ff","shortname":":prayer_beads:","title":"prayer beads"},
                {"id":"1f48e","shortname":":gem:","title":"gem stone"},
                {"id":"1f52a","shortname":":knife:","title":"hocho"},
                {"id":"1f3fa","shortname":":amphora:","title":"amphora"},
                {"id":"1f5fa","shortname":":map:","title":"world map"},
                {"id":"1f488","shortname":":barber:","title":"barber pole"},
                {"id":"1f5bc","shortname":":frame_photo:","title":"frame with picture"},
                {"id":"1f6ce","shortname":":bellhop:","title":"bellhop bell"},
                {"id":"1f6aa","shortname":":door:","title":"door"},
                {"id":"1f6cc","shortname":":sleeping_accommodation:","title":"sleeping accommodation"},
                {"id":"1f6cf","shortname":":bed:","title":"bed"},
                {"id":"1f6cb","shortname":":couch:","title":"couch and lamp"},
                {"id":"1f6bd","shortname":":toilet:","title":"toilet"},
                {"id":"1f6bf","shortname":":shower:","title":"shower"},
                {"id":"1f6c1","shortname":":bathtub:","title":"bathtub"},
                {"id":"231b","shortname":":hourglass:","title":"hourglass"},
                {"id":"23f3","shortname":":hourglass_flowing_sand:","title":"hourglass with flowing sand"},
                {"id":"231a","shortname":":watch:","title":"watch"},
                {"id":"23f0","shortname":":alarm_clock:","title":"alarm clock"},
                {"id":"23f1","shortname":":stopwatch:","title":"stopwatch"},
                {"id":"23f2","shortname":":timer:","title":"timer clock"},
                {"id":"1f570","shortname":":clock:","title":"mantlepiece clock"},
                {"id":"1f321","shortname":":thermometer:","title":"thermometer"},
                {"id":"26f1","shortname":":beach_umbrella:","title":"umbrella on ground"},
                {"id":"1f388","shortname":":balloon:","title":"balloon"},
                {"id":"1f389","shortname":":tada:","title":"party popper"},
                {"id":"1f38a","shortname":":confetti_ball:","title":"confetti ball"},
                {"id":"1f38e","shortname":":dolls:","title":"japanese dolls"},
                {"id":"1f38f","shortname":":flags:","title":"carp streamer"},
                {"id":"1f390","shortname":":wind_chime:","title":"wind chime"},
                {"id":"1f380","shortname":":ribbon:","title":"ribbon"},
                {"id":"1f381","shortname":":gift:","title":"wrapped present"},
                {"id":"1f579","shortname":":joystick:","title":"joystick"},
                {"id":"1f4ef","shortname":":postal_horn:","title":"postal horn"},
                {"id":"1f399","shortname":":microphone2:","title":"studio microphone"},
                {"id":"1f39a","shortname":":level_slider:","title":"level slider"},
                {"id":"1f39b","shortname":":control_knobs:","title":"control knobs"},
                {"id":"1f4fb","shortname":":radio:","title":"radio"},
                {"id":"1f4f1","shortname":":iphone:","title":"mobile phone"},
                {"id":"1f4f2","shortname":":calling:","title":"mobile phone with rightwards arrow at left"},
                {"id":"260e","shortname":":telephone:","title":"black telephone"},
                {"id":"1f4de","shortname":":telephone_receiver:","title":"telephone receiver"},
                {"id":"1f4df","shortname":":pager:","title":"pager"},
                {"id":"1f4e0","shortname":":fax:","title":"fax machine"},
                {"id":"1f50b","shortname":":battery:","title":"battery"},
                {"id":"1f50c","shortname":":electric_plug:","title":"electric plug"},
                {"id":"1f4bb","shortname":":computer:","title":"personal computer"},
                {"id":"1f5a5","shortname":":desktop:","title":"desktop computer"},
                {"id":"1f5a8","shortname":":printer:","title":"printer"},
                {"id":"2328","shortname":":keyboard:","title":"keyboard"},
                {"id":"1f5b1","shortname":":mouse_three_button:","title":"three button mouse"},
                {"id":"1f5b2","shortname":":trackball:","title":"trackball"},
                {"id":"1f4bd","shortname":":minidisc:","title":"minidisc"},
                {"id":"1f4be","shortname":":floppy_disk:","title":"floppy disk"},
                {"id":"1f4bf","shortname":":cd:","title":"optical disc"},
                {"id":"1f4c0","shortname":":dvd:","title":"dvd"},
                {"id":"1f3a5","shortname":":movie_camera:","title":"movie camera"},
                {"id":"1f39e","shortname":":film_frames:","title":"film frames"},
                {"id":"1f4fd","shortname":":projector:","title":"film projector"},
                {"id":"1f4fa","shortname":":tv:","title":"television"},
                {"id":"1f4f7","shortname":":camera:","title":"camera"},
                {"id":"1f4f8","shortname":":camera_with_flash:","title":"camera with flash"},
                {"id":"1f4f9","shortname":":video_camera:","title":"video camera"},
                {"id":"1f4fc","shortname":":vhs:","title":"videocassette"},
                {"id":"1f50d","shortname":":mag:","title":"left-pointing magnifying glass"},
                {"id":"1f50e","shortname":":mag_right:","title":"right-pointing magnifying glass"},
                {"id":"1f52c","shortname":":microscope:","title":"microscope"},
                {"id":"1f52d","shortname":":telescope:","title":"telescope"},
                {"id":"1f4e1","shortname":":satellite:","title":"satellite antenna"},
                {"id":"1f56f","shortname":":candle:","title":"candle"},
                {"id":"1f4a1","shortname":":bulb:","title":"electric light bulb"},
                {"id":"1f526","shortname":":flashlight:","title":"electric torch"},
                {"id":"1f3ee","shortname":":izakaya_lantern:","title":"izakaya lantern"},
                {"id":"1f4d4","shortname":":notebook_with_decorative_cover:","title":"notebook with decorative cover"},
                {"id":"1f4d5","shortname":":closed_book:","title":"closed book"},
                {"id":"1f4d6","shortname":":book:","title":"open book"},
                {"id":"1f4d7","shortname":":green_book:","title":"green book"},
                {"id":"1f4d8","shortname":":blue_book:","title":"blue book"},
                {"id":"1f4d9","shortname":":orange_book:","title":"orange book"},
                {"id":"1f4da","shortname":":books:","title":"books"},
                {"id":"1f4d3","shortname":":notebook:","title":"notebook"},
                {"id":"1f4d2","shortname":":ledger:","title":"ledger"},
                {"id":"1f4c3","shortname":":page_with_curl:","title":"page with curl"},
                {"id":"1f4dc","shortname":":scroll:","title":"scroll"},
                {"id":"1f4c4","shortname":":page_facing_up:","title":"page facing up"},
                {"id":"1f4f0","shortname":":newspaper:","title":"newspaper"},
                {"id":"1f5de","shortname":":newspaper2:","title":"rolled-up newspaper"},
                {"id":"1f4d1","shortname":":bookmark_tabs:","title":"bookmark tabs"},
                {"id":"1f516","shortname":":bookmark:","title":"bookmark"},
                {"id":"1f3f7","shortname":":label:","title":"label"},
                {"id":"1f4b0","shortname":":moneybag:","title":"money bag"},
                {"id":"1f4b4","shortname":":yen:","title":"banknote with yen sign"},
                {"id":"1f4b5","shortname":":dollar:","title":"banknote with dollar sign"},
                {"id":"1f4b6","shortname":":euro:","title":"banknote with euro sign"},
                {"id":"1f4b7","shortname":":pound:","title":"banknote with pound sign"},
                {"id":"1f4b8","shortname":":money_with_wings:","title":"money with wings"},
                {"id":"1f4b3","shortname":":credit_card:","title":"credit card"},
                {"id":"2709","shortname":":envelope:","title":"envelope"},
                {"id":"1f4e7","shortname":":e-mail:","title":"e-mail symbol"},
                {"id":"1f4e8","shortname":":incoming_envelope:","title":"incoming envelope"},
                {"id":"1f4e9","shortname":":envelope_with_arrow:","title":"envelope with downwards arrow above"},
                {"id":"1f4e4","shortname":":outbox_tray:","title":"outbox tray"},
                {"id":"1f4e5","shortname":":inbox_tray:","title":"inbox tray"},
                {"id":"1f4e6","shortname":":package:","title":"package"},
                {"id":"1f4eb","shortname":":mailbox:","title":"closed mailbox with raised flag"},
                {"id":"1f4ea","shortname":":mailbox_closed:","title":"closed mailbox with lowered flag"},
                {"id":"1f4ec","shortname":":mailbox_with_mail:","title":"open mailbox with raised flag"},
                {"id":"1f4ed","shortname":":mailbox_with_no_mail:","title":"open mailbox with lowered flag"},
                {"id":"1f4ee","shortname":":postbox:","title":"postbox"},
                {"id":"1f5f3","shortname":":ballot_box:","title":"ballot box with ballot"},
                {"id":"270f","shortname":":pencil2:","title":"pencil"},
                {"id":"2712","shortname":":black_nib:","title":"black nib"},
                {"id":"1f58b","shortname":":pen_fountain:","title":"lower left fountain pen"},
                {"id":"1f58a","shortname":":pen_ballpoint:","title":"lower left ballpoint pen"},
                {"id":"1f58c","shortname":":paintbrush:","title":"lower left paintbrush"},
                {"id":"1f58d","shortname":":crayon:","title":"lower left crayon"},
                {"id":"1f4dd","shortname":":pencil:","title":"memo"},
                {"id":"1f4c1","shortname":":file_folder:","title":"file folder"},
                {"id":"1f4c2","shortname":":open_file_folder:","title":"open file folder"},
                {"id":"1f5c2","shortname":":dividers:","title":"card index dividers"},
                {"id":"1f4c5","shortname":":date:","title":"calendar"},
                {"id":"1f4c6","shortname":":calendar:","title":"tear-off calendar"},
                {"id":"1f5d2","shortname":":notepad_spiral:","title":"spiral note pad"},
                {"id":"1f5d3","shortname":":calendar_spiral:","title":"spiral calendar pad"},
                {"id":"1f4c7","shortname":":card_index:","title":"card index"},
                {"id":"1f4c8","shortname":":chart_with_upwards_trend:","title":"chart with upwards trend"},
                {"id":"1f4c9","shortname":":chart_with_downwards_trend:","title":"chart with downwards trend"},
                {"id":"1f4ca","shortname":":bar_chart:","title":"bar chart"},
                {"id":"1f4cb","shortname":":clipboard:","title":"clipboard"},
                {"id":"1f4cc","shortname":":pushpin:","title":"pushpin"},
                {"id":"1f4cd","shortname":":round_pushpin:","title":"round pushpin"},
                {"id":"1f4ce","shortname":":paperclip:","title":"paperclip"},
                {"id":"1f587","shortname":":paperclips:","title":"linked paperclips"},
                {"id":"1f4cf","shortname":":straight_ruler:","title":"straight ruler"},
                {"id":"1f4d0","shortname":":triangular_ruler:","title":"triangular ruler"},
                {"id":"2702","shortname":":scissors:","title":"black scissors"},
                {"id":"1f5c3","shortname":":card_box:","title":"card file box"},
                {"id":"1f5c4","shortname":":file_cabinet:","title":"file cabinet"},
                {"id":"1f5d1","shortname":":wastebasket:","title":"wastebasket"},
                {"id":"1f512","shortname":":lock:","title":"lock"},
                {"id":"1f513","shortname":":unlock:","title":"open lock"},
                {"id":"1f50f","shortname":":lock_with_ink_pen:","title":"lock with ink pen"},
                {"id":"1f510","shortname":":closed_lock_with_key:","title":"closed lock with key"},
                {"id":"1f511","shortname":":key:","title":"key"},
                {"id":"1f5dd","shortname":":key2:","title":"old key"},
                {"id":"1f528","shortname":":hammer:","title":"hammer"},
                {"id":"26cf","shortname":":pick:","title":"pick"},
                {"id":"2692","shortname":":hammer_pick:","title":"hammer and pick"},
                {"id":"1f6e0","shortname":":tools:","title":"hammer and wrench"},
                {"id":"1f5e1","shortname":":dagger:","title":"dagger knife"},
                {"id":"2694","shortname":":crossed_swords:","title":"crossed swords"},
                {"id":"1f52b","shortname":":gun:","title":"pistol"},
                {"id":"1f6e1","shortname":":shield:","title":"shield"},
                {"id":"1f527","shortname":":wrench:","title":"wrench"},
                {"id":"1f529","shortname":":nut_and_bolt:","title":"nut and bolt"},
                {"id":"2699","shortname":":gear:","title":"gear"},
                {"id":"1f5dc","shortname":":compression:","title":"compression"},
                {"id":"2697","shortname":":alembic:","title":"alembic"},
                {"id":"2696","shortname":":scales:","title":"scales"},
                {"id":"1f517","shortname":":link:","title":"link symbol"},
                {"id":"26d3","shortname":":chains:","title":"chains"},
                {"id":"1f489","shortname":":syringe:","title":"syringe"},
                {"id":"1f48a","shortname":":pill:","title":"pill"},
                {"id":"1f6ac","shortname":":smoking:","title":"smoking symbol"},
                {"id":"26b0","shortname":":coffin:","title":"coffin"},
                {"id":"26b1","shortname":":urn:","title":"funeral urn"},
                {"id":"1f5ff","shortname":":moyai:","title":"moyai"},
                {"id":"1f6e2","shortname":":oil:","title":"oil drum"},
                {"id":"1f52e","shortname":":crystal_ball:","title":"crystal ball"},
                {"id":"1f6a9","shortname":":triangular_flag_on_post:","title":"triangular flag on post"},
                {"id":"1f38c","shortname":":crossed_flags:","title":"crossed flags"},
                {"id":"1f3f4","shortname":":flag_black:","title":"waving black flag"},
                {"id":"1f3f3","shortname":":flag_white:","title":"waving white flag"},
            ]
        },
             {
            "symbols":[
                {"id":"1f498","shortname":":cupid:","title":"heart with arrow"},
                {"id":"2764","shortname":":heart:","title":"heavy black heart"},
                {"id":"1f493","shortname":":heartbeat:","title":"beating heart"},
                {"id":"1f494","shortname":":broken_heart:","title":"broken heart"},
                {"id":"1f495","shortname":":two_hearts:","title":"two hearts"},
                {"id":"1f496","shortname":":sparkling_heart:","title":"sparkling heart"},
                {"id":"1f497","shortname":":heartpulse:","title":"growing heart"},
                {"id":"1f499","shortname":":blue_heart:","title":"blue heart"},
                {"id":"1f49a","shortname":":green_heart:","title":"green heart"},
                {"id":"1f49b","shortname":":yellow_heart:","title":"yellow heart"},
                {"id":"1f49c","shortname":":purple_heart:","title":"purple heart"},
                /*{"id":"1f5a4","shortname":":black_heart:","title":"black heart"},*/
                {"id":"1f49d","shortname":":gift_heart:","title":"heart with ribbon"},
                {"id":"1f49e","shortname":":revolving_hearts:","title":"revolving hearts"},
                {"id":"1f49f","shortname":":heart_decoration:","title":"heart decoration"},
                {"id":"2763","shortname":":heart_exclamation:","title":"heavy heart exclamation mark ornament"},
                {"id":"1f4a2","shortname":":anger:","title":"anger symbol"},
                {"id":"1f4a5","shortname":":boom:","title":"collision symbol"},
                {"id":"1f4ab","shortname":":dizzy:","title":"dizzy symbol"},
                {"id":"1f4ac","shortname":":speech_balloon:","title":"speech balloon"},
                {"id":"1f5e8","shortname":":speech_left:","title":"left speech bubble"},
                {"id":"1f5ef","shortname":":anger_right:","title":"right anger bubble"},
                {"id":"1f4ad","shortname":":thought_balloon:","title":"thought balloon"},
                {"id":"1f4ae","shortname":":white_flower:","title":"white flower"},
                {"id":"1f310","shortname":":globe_with_meridians:","title":"globe with meridians"},
                {"id":"2668","shortname":":hotsprings:","title":"hot springs"},
                /*{"id":"1f6d1","shortname":":octagonal_sign:","title":"octagonal sign"},*/
                {"id":"1f55b","shortname":":clock12:","title":"clock face twelve oclock"},
                {"id":"1f567","shortname":":clock1230:","title":"clock face twelve-thirty"},
                {"id":"1f550","shortname":":clock1:","title":"clock face one oclock"},
                {"id":"1f55c","shortname":":clock130:","title":"clock face one-thirty"},
                {"id":"1f551","shortname":":clock2:","title":"clock face two oclock"},
                {"id":"1f55d","shortname":":clock230:","title":"clock face two-thirty"},
                {"id":"1f552","shortname":":clock3:","title":"clock face three oclock"},
                {"id":"1f55e","shortname":":clock330:","title":"clock face three-thirty"},
                {"id":"1f553","shortname":":clock4:","title":"clock face four oclock"},
                {"id":"1f55f","shortname":":clock430:","title":"clock face four-thirty"},
                {"id":"1f554","shortname":":clock5:","title":"clock face five oclock"},
                {"id":"1f560","shortname":":clock530:","title":"clock face five-thirty"},
                {"id":"1f555","shortname":":clock6:","title":"clock face six oclock"},
                {"id":"1f561","shortname":":clock630:","title":"clock face six-thirty"},
                {"id":"1f556","shortname":":clock7:","title":"clock face seven oclock"},
                {"id":"1f562","shortname":":clock730:","title":"clock face seven-thirty"},
                {"id":"1f557","shortname":":clock8:","title":"clock face eight oclock"},
                {"id":"1f563","shortname":":clock830:","title":"clock face eight-thirty"},
                {"id":"1f558","shortname":":clock9:","title":"clock face nine oclock"},
                {"id":"1f564","shortname":":clock930:","title":"clock face nine-thirty"},
                {"id":"1f559","shortname":":clock10:","title":"clock face ten oclock"},
                {"id":"1f565","shortname":":clock1030:","title":"clock face ten-thirty"},
                {"id":"1f55a","shortname":":clock11:","title":"clock face eleven oclock"},
                {"id":"1f566","shortname":":clock1130:","title":"clock face eleven-thirty"},
                {"id":"1f300","shortname":":cyclone:","title":"cyclone"},
                {"id":"2660","shortname":":spades:","title":"black spade suit"},
                {"id":"2665","shortname":":hearts:","title":"black heart suit"},
                {"id":"2666","shortname":":diamonds:","title":"black diamond suit"},
                {"id":"2663","shortname":":clubs:","title":"black club suit"},
                {"id":"1f0cf","shortname":":black_joker:","title":"playing card black joker"},
                {"id":"1f004","shortname":":mahjong:","title":"mahjong tile red dragon"},
                {"id":"1f3b4","shortname":":flower_playing_cards:","title":"flower playing cards"},
                {"id":"1f507","shortname":":mute:","title":"speaker with cancellation stroke"},
                {"id":"1f508","shortname":":speaker:","title":"speaker"},
                {"id":"1f509","shortname":":sound:","title":"speaker with one sound wave"},
                {"id":"1f50a","shortname":":loud_sound:","title":"speaker with three sound waves"},
                {"id":"1f4e2","shortname":":loudspeaker:","title":"public address loudspeaker"},
                {"id":"1f4e3","shortname":":mega:","title":"cheering megaphone"},
                {"id":"1f514","shortname":":bell:","title":"bell"},
                {"id":"1f515","shortname":":no_bell:","title":"bell with cancellation stroke"},
                {"id":"1f3b5","shortname":":musical_note:","title":"musical note"},
                {"id":"1f3b6","shortname":":notes:","title":"multiple musical notes"},
                {"id":"1f4b9","shortname":":chart:","title":"chart with upwards trend and yen sign"},
                {"id":"1f4b1","shortname":":currency_exchange:","title":"currency exchange"},
                {"id":"1f4b2","shortname":":heavy_dollar_sign:","title":"heavy dollar sign"},
                {"id":"1f3e7","shortname":":atm:","title":"automated teller machine"},
                {"id":"1f6ae","shortname":":put_litter_in_its_place:","title":"put litter in its place symbol"},
                {"id":"1f6b0","shortname":":potable_water:","title":"potable water symbol"},
                {"id":"267f","shortname":":wheelchair:","title":"wheelchair symbol"},
                {"id":"1f6b9","shortname":":mens:","title":"mens symbol"},
                {"id":"1f6ba","shortname":":womens:","title":"womens symbol"},
                {"id":"1f6bb","shortname":":restroom:","title":"restroom"},
                {"id":"1f6bc","shortname":":baby_symbol:","title":"baby symbol"},
                {"id":"1f6be","shortname":":wc:","title":"water closet"},
                {"id":"1f6c2","shortname":":passport_control:","title":"passport control"},
                {"id":"1f6c3","shortname":":customs:","title":"customs"},
                {"id":"1f6c4","shortname":":baggage_claim:","title":"baggage claim"},
                {"id":"1f6c5","shortname":":left_luggage:","title":"left luggage"},
                {"id":"26a0","shortname":":warning:","title":"warning sign"},
                {"id":"1f6b8","shortname":":children_crossing:","title":"children crossing"},
                {"id":"26d4","shortname":":no_entry:","title":"no entry"},
                {"id":"1f6ab","shortname":":no_entry_sign:","title":"no entry sign"},
                {"id":"1f6b3","shortname":":no_bicycles:","title":"no bicycles"},
                {"id":"1f6ad","shortname":":no_smoking:","title":"no smoking symbol"},
                {"id":"1f6af","shortname":":do_not_litter:","title":"do not litter symbol"},
                {"id":"1f6b1","shortname":":non-potable_water:","title":"non-potable water symbol"},
                {"id":"1f6b7","shortname":":no_pedestrians:","title":"no pedestrians"},
                {"id":"1f4f5","shortname":":no_mobile_phones:","title":"no mobile phones"},
                {"id":"1f51e","shortname":":underage:","title":"no one under eighteen symbol"},
                {"id":"2622","shortname":":radioactive:","title":"radioactive sign"},
                {"id":"2623","shortname":":biohazard:","title":"biohazard sign"},
                {"id":"2b06","shortname":":arrow_up:","title":"upwards black arrow"},
                {"id":"2197","shortname":":arrow_upper_right:","title":"north east arrow"},
                {"id":"27a1","shortname":":arrow_right:","title":"black rightwards arrow"},
                {"id":"2198","shortname":":arrow_lower_right:","title":"south east arrow"},
                {"id":"2b07","shortname":":arrow_down:","title":"downwards black arrow"},
                {"id":"2199","shortname":":arrow_lower_left:","title":"south west arrow"},
                {"id":"2b05","shortname":":arrow_left:","title":"leftwards black arrow"},
                {"id":"2196","shortname":":arrow_upper_left:","title":"north west arrow"},
                {"id":"2195","shortname":":arrow_up_down:","title":"up down arrow"},
                {"id":"2194","shortname":":left_right_arrow:","title":"left right arrow"},
                {"id":"21a9","shortname":":leftwards_arrow_with_hook:","title":"leftwards arrow with hook"},
                {"id":"21aa","shortname":":arrow_right_hook:","title":"rightwards arrow with hook"},
                {"id":"2934","shortname":":arrow_heading_up:","title":"arrow pointing rightwards then curving upwards"},
                {"id":"2935","shortname":":arrow_heading_down:","title":"arrow pointing rightwards then curving downwards"},
                {"id":"1f503","shortname":":arrows_clockwise:","title":"clockwise downwards and upwards open circle arrows"},
                {"id":"1f504","shortname":":arrows_counterclockwise:","title":"anticlockwise downwards and upwards open circle arrows"},
                {"id":"1f519","shortname":":back:","title":"back with leftwards arrow above"},
                {"id":"1f51a","shortname":":end:","title":"end with leftwards arrow above"},
                {"id":"1f51b","shortname":":on:","title":"on with exclamation mark with left right arrow abo"},
                {"id":"1f51c","shortname":":soon:","title":"soon with rightwards arrow above"},
                {"id":"1f51d","shortname":":top:","title":"top with upwards arrow above"},
                {"id":"1f6d0","shortname":":place_of_worship:","title":"place of worship"},
                {"id":"269b","shortname":":atom:","title":"atom symbol"},
                {"id":"1f549","shortname":":om_symbol:","title":"om symbol"},
                {"id":"2721","shortname":":star_of_david:","title":"star of david"},
                {"id":"2638","shortname":":wheel_of_dharma:","title":"wheel of dharma"},
                {"id":"262f","shortname":":yin_yang:","title":"yin yang"},
                {"id":"271d","shortname":":cross:","title":"latin cross"},
                {"id":"2626","shortname":":orthodox_cross:","title":"orthodox cross"},
                {"id":"262a","shortname":":star_and_crescent:","title":"star and crescent"},
                {"id":"262e","shortname":":peace:","title":"peace symbol"},
                {"id":"1f54e","shortname":":menorah:","title":"menorah with nine branches"},
                {"id":"1f52f","shortname":":six_pointed_star:","title":"six pointed star with middle dot"},
                {"id":"2648","shortname":":aries:","title":"aries"},
                {"id":"2649","shortname":":taurus:","title":"taurus"},
                {"id":"264a","shortname":":gemini:","title":"gemini"},
                {"id":"264b","shortname":":cancer:","title":"cancer"},
                {"id":"264c","shortname":":leo:","title":"leo"},
                {"id":"264d","shortname":":virgo:","title":"virgo"},
                {"id":"264e","shortname":":libra:","title":"libra"},
                {"id":"264f","shortname":":scorpius:","title":"scorpius"},
                {"id":"2650","shortname":":sagittarius:","title":"sagittarius"},
                {"id":"2651","shortname":":capricorn:","title":"capricorn"},
                {"id":"2652","shortname":":aquarius:","title":"aquarius"},
                {"id":"2653","shortname":":pisces:","title":"pisces"},
                {"id":"26ce","shortname":":ophiuchus:","title":"ophiuchus"},
                {"id":"1f500","shortname":":twisted_rightwards_arrows:","title":"twisted rightwards arrows"},
                {"id":"1f501","shortname":":repeat:","title":"clockwise rightwards and leftwards open circle arrows"},
                {"id":"1f502","shortname":":repeat_one:","title":"clockwise rightwards and leftwards open circle arrows with circled one overlay"},
                {"id":"25b6","shortname":":arrow_forward:","title":"black right-pointing triangle"},
                {"id":"23e9","shortname":":fast_forward:","title":"black right-pointing double triangle"},
                {"id":"23ed","shortname":":track_next:","title":"black right-pointing double triangle with vertical bar"},
                {"id":"23ef","shortname":":play_pause:","title":"black right-pointing double triangle with double vertical bar"},
                {"id":"25c0","shortname":":arrow_backward:","title":"black left-pointing triangle"},
                {"id":"23ea","shortname":":rewind:","title":"black left-pointing double triangle"},
                {"id":"23ee","shortname":":track_previous:","title":"black left-pointing double triangle with vertical bar"},
                {"id":"1f53c","shortname":":arrow_up_small:","title":"up-pointing small red triangle"},
                {"id":"23eb","shortname":":arrow_double_up:","title":"black up-pointing double triangle"},
                {"id":"1f53d","shortname":":arrow_down_small:","title":"down-pointing small red triangle"},
                {"id":"23ec","shortname":":arrow_double_down:","title":"black down-pointing double triangle"},
                {"id":"23f8","shortname":":pause_button:","title":"double vertical bar"},
                {"id":"23f9","shortname":":stop_button:","title":"black square for stop"},
                {"id":"23fa","shortname":":record_button:","title":"black circle for record"},
                {"id":"23cf","shortname":":eject:","title":"eject symbol"},
                {"id":"1f3a6","shortname":":cinema:","title":"cinema"},
                {"id":"1f505","shortname":":low_brightness:","title":"low brightness symbol"},
                {"id":"1f506","shortname":":high_brightness:","title":"high brightness symbol"},
                {"id":"1f4f6","shortname":":signal_strength:","title":"antenna with bars"},
                {"id":"1f4f3","shortname":":vibration_mode:","title":"vibration mode"},
                {"id":"1f4f4","shortname":":mobile_phone_off:","title":"mobile phone off"},
                {"id":"267b","shortname":":recycle:","title":"black universal recycling symbol"},
                {"id":"1f4db","shortname":":name_badge:","title":"name badge"},
                {"id":"269c","shortname":":fleur-de-lis:","title":"fleur-de-lis"},
                {"id":"1f530","shortname":":beginner:","title":"japanese symbol for beginner"},
                {"id":"1f531","shortname":":trident:","title":"trident emblem"},
                {"id":"2b55","shortname":":o:","title":"heavy large circle"},
                {"id":"2705","shortname":":white_check_mark:","title":"white heavy check mark"},
                {"id":"2611","shortname":":ballot_box_with_check:","title":"ballot box with check"},
                {"id":"2714","shortname":":heavy_check_mark:","title":"heavy check mark"},
                {"id":"2716","shortname":":heavy_multiplication_x:","title":"heavy multiplication x"},
                {"id":"274c","shortname":":x:","title":"cross mark"},
                {"id":"274e","shortname":":negative_squared_cross_mark:","title":"negative squared cross mark"},
                {"id":"2795","shortname":":heavy_plus_sign:","title":"heavy plus sign"},
                {"id":"2796","shortname":":heavy_minus_sign:","title":"heavy minus sign"},
                {"id":"2797","shortname":":heavy_division_sign:","title":"heavy division sign"},
                {"id":"27b0","shortname":":curly_loop:","title":"curly loop"},
                {"id":"27bf","shortname":":loop:","title":"double curly loop"},
                {"id":"303d","shortname":":part_alternation_mark:","title":"part alternation mark"},
                {"id":"2733","shortname":":eight_spoked_asterisk:","title":"eight spoked asterisk"},
                {"id":"2734","shortname":":eight_pointed_black_star:","title":"eight pointed black star"},
                {"id":"2747","shortname":":sparkle:","title":"sparkle"},
                {"id":"203c","shortname":":bangbang:","title":"double exclamation mark"},
                {"id":"2049","shortname":":interrobang:","title":"exclamation question mark"},
                {"id":"2753","shortname":":question:","title":"black question mark ornament"},
                {"id":"2754","shortname":":grey_question:","title":"white question mark ornament"},
                {"id":"2755","shortname":":grey_exclamation:","title":"white exclamation mark ornament"},
                {"id":"2757","shortname":":exclamation:","title":"heavy exclamation mark symbol"},
                {"id":"3030","shortname":":wavy_dash:","title":"wavy dash"},
                {"id":"00a9","shortname":":copyright:","title":"copyright sign"},
                {"id":"00ae","shortname":":registered:","title":"registered sign"},
                {"id":"2122","shortname":":tm:","title":"trade mark sign"},
                {"id":"1f51f","shortname":":keycap_ten:","title":"keycap ten"},
                {"id":"1f4af","shortname":":100:","title":"hundred points symbol"},
                {"id":"1f520","shortname":":capital_abcd:","title":"input symbol for latin capital letters"},
                {"id":"1f521","shortname":":abcd:","title":"input symbol for latin small letters"},
                {"id":"1f522","shortname":":1234:","title":"input symbol for numbers"},
                {"id":"1f523","shortname":":symbols:","title":"input symbol for symbols"},
                {"id":"1f524","shortname":":abc:","title":"input symbol for latin letters"},
                {"id":"1f170","shortname":":a:","title":"negative squared latin capital letter a"},
                {"id":"1f18e","shortname":":ab:","title":"negative squared ab"},
                {"id":"1f171","shortname":":b:","title":"negative squared latin capital letter b"},
                {"id":"1f191","shortname":":cl:","title":"squared cl"},
                {"id":"1f192","shortname":":cool:","title":"squared cool"},
                {"id":"1f193","shortname":":free:","title":"squared free"},
                {"id":"2139","shortname":":information_source:","title":"information source"},
                {"id":"1f194","shortname":":id:","title":"squared id"},
                {"id":"24c2","shortname":":m:","title":"circled latin capital letter m"},
                {"id":"1f195","shortname":":new:","title":"squared new"},
                {"id":"1f196","shortname":":ng:","title":"squared ng"},
                {"id":"1f17e","shortname":":o2:","title":"negative squared latin capital letter o"},
                {"id":"1f197","shortname":":ok:","title":"squared ok"},
                {"id":"1f17f","shortname":":parking:","title":"negative squared latin capital letter p"},
                {"id":"1f198","shortname":":sos:","title":"squared sos"},
                {"id":"1f199","shortname":":up:","title":"squared up with exclamation mark"},
                {"id":"1f19a","shortname":":vs:","title":"squared vs"},
                {"id":"1f201","shortname":":koko:","title":"squared katakana koko"},
                {"id":"1f202","shortname":":sa:","title":"squared katakana sa"},
                {"id":"1f237","shortname":":u6708:","title":"squared cjk unified ideograph-6708"},
                {"id":"1f236","shortname":":u6709:","title":"squared cjk unified ideograph-6709"},
                {"id":"1f22f","shortname":":u6307:","title":"squared cjk unified ideograph-6307"},
                {"id":"1f250","shortname":":ideograph_advantage:","title":"circled ideograph advantage"},
                {"id":"1f239","shortname":":u5272:","title":"squared cjk unified ideograph-5272"},
                {"id":"1f21a","shortname":":u7121:","title":"squared cjk unified ideograph-7121"},
                {"id":"1f232","shortname":":u7981:","title":"squared cjk unified ideograph-7981"},
                {"id":"1f251","shortname":":accept:","title":"circled ideograph accept"},
                {"id":"1f238","shortname":":u7533:","title":"squared cjk unified ideograph-7533"},
                {"id":"1f234","shortname":":u5408:","title":"squared cjk unified ideograph-5408"},
                {"id":"1f233","shortname":":u7a7a:","title":"squared cjk unified ideograph-7a7a"},
                {"id":"3297","shortname":":congratulations:","title":"circled ideograph congratulation"},
                {"id":"3299","shortname":":secret:","title":"circled ideograph secret"},
                {"id":"1f23a","shortname":":u55b6:","title":"squared cjk unified ideograph-55b6"},
                {"id":"1f235","shortname":":u6e80:","title":"squared cjk unified ideograph-6e80"},
                {"id":"25aa","shortname":":black_small_square:","title":"black small square"},
                {"id":"25ab","shortname":":white_small_square:","title":"white small square"},
                {"id":"25fb","shortname":":white_medium_square:","title":"white medium square"},
                {"id":"25fc","shortname":":black_medium_square:","title":"black medium square"},
                {"id":"25fd","shortname":":white_medium_small_square:","title":"white medium small square"},
                {"id":"25fe","shortname":":black_medium_small_square:","title":"black medium small square"},
                {"id":"2b1b","shortname":":black_large_square:","title":"black large square"},
                {"id":"2b1c","shortname":":white_large_square:","title":"white large square"},
                {"id":"1f536","shortname":":large_orange_diamond:","title":"large orange diamond"},
                {"id":"1f537","shortname":":large_blue_diamond:","title":"large blue diamond"},
                {"id":"1f538","shortname":":small_orange_diamond:","title":"small orange diamond"},
                {"id":"1f539","shortname":":small_blue_diamond:","title":"small blue diamond"},
                {"id":"1f53a","shortname":":small_red_triangle:","title":"up-pointing red triangle"},
                {"id":"1f53b","shortname":":small_red_triangle_down:","title":"down-pointing red triangle"},
                {"id":"1f4a0","shortname":":diamond_shape_with_a_dot_inside:","title":"diamond shape with a dot inside"},
                {"id":"1f518","shortname":":radio_button:","title":"radio button"},
                {"id":"1f532","shortname":":black_square_button:","title":"black square button"},
                {"id":"1f533","shortname":":white_square_button:","title":"white square button"},
                {"id":"26aa","shortname":":white_circle:","title":"white circle"},
                {"id":"26ab","shortname":":black_circle:","title":"black circle"},
                {"id":"1f534","shortname":":red_circle:","title":"red circle"},
                {"id":"1f535","shortname":":blue_circle:","title":"blue circle"},
            ]
        },
        {
            "flags":[
                {"id":"1f1e6-1f1e8","shortname":":flag_ac:","title":"ascension"},
                {"id":"1f1e6-1f1e9","shortname":":flag_ad:","title":"andorra"},
                {"id":"1f1e6-1f1ea","shortname":":flag_ae:","title":"the united arab emirates"},
                {"id":"1f1e6-1f1eb","shortname":":flag_af:","title":"afghanistan"},
                {"id":"1f1e6-1f1ec","shortname":":flag_ag:","title":"antigua and barbuda"},
                {"id":"1f1e6-1f1ee","shortname":":flag_ai:","title":"anguilla"},
                {"id":"1f1e6-1f1f1","shortname":":flag_al:","title":"albania"},
                {"id":"1f1e6-1f1f2","shortname":":flag_am:","title":"armenia"},
                {"id":"1f1e6-1f1f4","shortname":":flag_ao:","title":"angola"},
                {"id":"1f1e6-1f1f6","shortname":":flag_aq:","title":"antarctica"},
                {"id":"1f1e6-1f1f7","shortname":":flag_ar:","title":"argentina"},
                {"id":"1f1e6-1f1f8","shortname":":flag_as:","title":"american samoa"},
                {"id":"1f1e6-1f1f9","shortname":":flag_at:","title":"austria"},
                {"id":"1f1e6-1f1fa","shortname":":flag_au:","title":"australia"},
                {"id":"1f1e6-1f1fc","shortname":":flag_aw:","title":"aruba"},
                {"id":"1f1e6-1f1fd","shortname":":flag_ax:","title":"åland islands"},
                {"id":"1f1e6-1f1ff","shortname":":flag_az:","title":"azerbaijan"},
                {"id":"1f1e7-1f1e6","shortname":":flag_ba:","title":"bosnia and herzegovina"},
                {"id":"1f1e7-1f1e7","shortname":":flag_bb:","title":"barbados"},
                {"id":"1f1e7-1f1e9","shortname":":flag_bd:","title":"bangladesh"},
                {"id":"1f1e7-1f1ea","shortname":":flag_be:","title":"belgium"},
                {"id":"1f1e7-1f1eb","shortname":":flag_bf:","title":"burkina faso"},
                {"id":"1f1e7-1f1ec","shortname":":flag_bg:","title":"bulgaria"},
                {"id":"1f1e7-1f1ed","shortname":":flag_bh:","title":"bahrain"},
                {"id":"1f1e7-1f1ee","shortname":":flag_bi:","title":"burundi"},
                {"id":"1f1e7-1f1ef","shortname":":flag_bj:","title":"benin"},
                {"id":"1f1e7-1f1f1","shortname":":flag_bl:","title":"saint barthélemy"},
                {"id":"1f1e7-1f1f2","shortname":":flag_bm:","title":"bermuda"},
                {"id":"1f1e7-1f1f3","shortname":":flag_bn:","title":"brunei"},
                {"id":"1f1e7-1f1f4","shortname":":flag_bo:","title":"bolivia"},
                {"id":"1f1e7-1f1f6","shortname":":flag_bq:","title":"caribbean netherlands"},
                {"id":"1f1e7-1f1f7","shortname":":flag_br:","title":"brazil"},
                {"id":"1f1e7-1f1f8","shortname":":flag_bs:","title":"the bahamas"},
                {"id":"1f1e7-1f1f9","shortname":":flag_bt:","title":"bhutan"},
                {"id":"1f1e7-1f1fb","shortname":":flag_bv:","title":"bouvet island"},
                {"id":"1f1e7-1f1fc","shortname":":flag_bw:","title":"botswana"},
                {"id":"1f1e7-1f1fe","shortname":":flag_by:","title":"belarus"},
                {"id":"1f1e7-1f1ff","shortname":":flag_bz:","title":"belize"},
                {"id":"1f1e8-1f1e6","shortname":":flag_ca:","title":"canada"},
                {"id":"1f1e8-1f1e8","shortname":":flag_cc:","title":"cocos (keeling) islands"},
                {"id":"1f1e8-1f1e9","shortname":":flag_cd:","title":"the democratic republic of the congo"},
                {"id":"1f1e8-1f1eb","shortname":":flag_cf:","title":"central african republic"},
                {"id":"1f1e8-1f1ec","shortname":":flag_cg:","title":"the republic of the congo"},
                {"id":"1f1e8-1f1ed","shortname":":flag_ch:","title":"switzerland"},
                {"id":"1f1e8-1f1ee","shortname":":flag_ci:","title":"côte d’ivoire"},
                {"id":"1f1e8-1f1f0","shortname":":flag_ck:","title":"cook islands"},
                {"id":"1f1e8-1f1f1","shortname":":flag_cl:","title":"chile"},
                {"id":"1f1e8-1f1f2","shortname":":flag_cm:","title":"cameroon"},
                {"id":"1f1e8-1f1f3","shortname":":flag_cn:","title":"china"},
                {"id":"1f1e8-1f1f4","shortname":":flag_co:","title":"colombia"},
                {"id":"1f1e8-1f1f5","shortname":":flag_cp:","title":"clipperton island"},
                {"id":"1f1e8-1f1f7","shortname":":flag_cr:","title":"costa rica"},
                {"id":"1f1e8-1f1fa","shortname":":flag_cu:","title":"cuba"},
                {"id":"1f1e8-1f1fb","shortname":":flag_cv:","title":"cape verde"},
                {"id":"1f1e8-1f1fc","shortname":":flag_cw:","title":"curaçao"},
                {"id":"1f1e8-1f1fd","shortname":":flag_cx:","title":"christmas island"},
                {"id":"1f1e8-1f1fe","shortname":":flag_cy:","title":"cyprus"},
                {"id":"1f1e8-1f1ff","shortname":":flag_cz:","title":"the czech republic"},
                {"id":"1f1e9-1f1ea","shortname":":flag_de:","title":"germany"},
                {"id":"1f1e9-1f1ec","shortname":":flag_dg:","title":"diego garcia"},
                {"id":"1f1e9-1f1ef","shortname":":flag_dj:","title":"djibouti"},
                {"id":"1f1e9-1f1f0","shortname":":flag_dk:","title":"denmark"},
                {"id":"1f1e9-1f1f2","shortname":":flag_dm:","title":"dominica"},
                {"id":"1f1e9-1f1f4","shortname":":flag_do:","title":"the dominican republic"},
                {"id":"1f1e9-1f1ff","shortname":":flag_dz:","title":"algeria"},
                {"id":"1f1ea-1f1e6","shortname":":flag_ea:","title":"ceuta, melilla"},
                {"id":"1f1ea-1f1e8","shortname":":flag_ec:","title":"ecuador"},
                {"id":"1f1ea-1f1ea","shortname":":flag_ee:","title":"estonia"},
                {"id":"1f1ea-1f1ec","shortname":":flag_eg:","title":"egypt"},
                {"id":"1f1ea-1f1ed","shortname":":flag_eh:","title":"western sahara"},
                {"id":"1f1ea-1f1f7","shortname":":flag_er:","title":"eritrea"},
                {"id":"1f1ea-1f1f8","shortname":":flag_es:","title":"spain"},
                {"id":"1f1ea-1f1f9","shortname":":flag_et:","title":"ethiopia"},
                {"id":"1f1ea-1f1fa","shortname":":flag_eu:","title":"european union"},
                {"id":"1f1eb-1f1ee","shortname":":flag_fi:","title":"finland"},
                {"id":"1f1eb-1f1ef","shortname":":flag_fj:","title":"fiji"},
                {"id":"1f1eb-1f1f0","shortname":":flag_fk:","title":"falkland islands"},
                {"id":"1f1eb-1f1f2","shortname":":flag_fm:","title":"micronesia"},
                {"id":"1f1eb-1f1f4","shortname":":flag_fo:","title":"faroe islands"},
                {"id":"1f1eb-1f1f7","shortname":":flag_fr:","title":"france"},
                {"id":"1f1ec-1f1e6","shortname":":flag_ga:","title":"gabon"},
                {"id":"1f1ec-1f1e7","shortname":":flag_gb:","title":"great britain"},
                {"id":"1f1ec-1f1e9","shortname":":flag_gd:","title":"grenada"},
                {"id":"1f1ec-1f1ea","shortname":":flag_ge:","title":"georgia"},
                {"id":"1f1ec-1f1eb","shortname":":flag_gf:","title":"french guiana"},
                {"id":"1f1ec-1f1ec","shortname":":flag_gg:","title":"guernsey"},
                {"id":"1f1ec-1f1ed","shortname":":flag_gh:","title":"ghana"},
                {"id":"1f1ec-1f1ee","shortname":":flag_gi:","title":"gibraltar"},
                {"id":"1f1ec-1f1f1","shortname":":flag_gl:","title":"greenland"},
                {"id":"1f1ec-1f1f2","shortname":":flag_gm:","title":"the gambia"},
                {"id":"1f1ec-1f1f3","shortname":":flag_gn:","title":"guinea"},
                {"id":"1f1ec-1f1f5","shortname":":flag_gp:","title":"guadeloupe"},
                {"id":"1f1ec-1f1f6","shortname":":flag_gq:","title":"equatorial guinea"},
                {"id":"1f1ec-1f1f7","shortname":":flag_gr:","title":"greece"},
                {"id":"1f1ec-1f1f8","shortname":":flag_gs:","title":"south georgia"},
                {"id":"1f1ec-1f1f9","shortname":":flag_gt:","title":"guatemala"},
                {"id":"1f1ec-1f1fa","shortname":":flag_gu:","title":"guam"},
                {"id":"1f1ec-1f1fc","shortname":":flag_gw:","title":"guinea-bissau"},
                {"id":"1f1ec-1f1fe","shortname":":flag_gy:","title":"guyana"},
                {"id":"1f1ed-1f1f0","shortname":":flag_hk:","title":"hong kong"},
                {"id":"1f1ed-1f1f2","shortname":":flag_hm:","title":"heard island and mcdonald islands"},
                {"id":"1f1ed-1f1f3","shortname":":flag_hn:","title":"honduras"},
                {"id":"1f1ed-1f1f7","shortname":":flag_hr:","title":"croatia"},
                {"id":"1f1ed-1f1f9","shortname":":flag_ht:","title":"haiti"},
                {"id":"1f1ed-1f1fa","shortname":":flag_hu:","title":"hungary"},
                {"id":"1f1ee-1f1e8","shortname":":flag_ic:","title":"canary islands"},
                {"id":"1f1ee-1f1e9","shortname":":flag_id:","title":"indonesia"},
                {"id":"1f1ee-1f1ea","shortname":":flag_ie:","title":"ireland"},
                {"id":"1f1ee-1f1f1","shortname":":flag_il:","title":"israel"},
                {"id":"1f1ee-1f1f2","shortname":":flag_im:","title":"isle of man"},
                {"id":"1f1ee-1f1f3","shortname":":flag_in:","title":"india"},
                {"id":"1f1ee-1f1f4","shortname":":flag_io:","title":"british indian ocean territory"},
                {"id":"1f1ee-1f1f6","shortname":":flag_iq:","title":"iraq"},
                {"id":"1f1ee-1f1f7","shortname":":flag_ir:","title":"iran"},
                {"id":"1f1ee-1f1f8","shortname":":flag_is:","title":"iceland"},
                {"id":"1f1ee-1f1f9","shortname":":flag_it:","title":"italy"},
                {"id":"1f1ef-1f1ea","shortname":":flag_je:","title":"jersey"},
                {"id":"1f1ef-1f1f2","shortname":":flag_jm:","title":"jamaica"},
                {"id":"1f1ef-1f1f4","shortname":":flag_jo:","title":"jordan"},
                {"id":"1f1ef-1f1f5","shortname":":flag_jp:","title":"japan"},
                {"id":"1f1f0-1f1ea","shortname":":flag_ke:","title":"kenya"},
                {"id":"1f1f0-1f1ec","shortname":":flag_kg:","title":"kyrgyzstan"},
                {"id":"1f1f0-1f1ed","shortname":":flag_kh:","title":"cambodia"},
                {"id":"1f1f0-1f1ee","shortname":":flag_ki:","title":"kiribati"},
                {"id":"1f1f0-1f1f2","shortname":":flag_km:","title":"the comoros"},
                {"id":"1f1f0-1f1f3","shortname":":flag_kn:","title":"saint kitts and nevis"},
                {"id":"1f1f0-1f1f5","shortname":":flag_kp:","title":"north korea"},
                {"id":"1f1f0-1f1f7","shortname":":flag_kr:","title":"korea"},
                {"id":"1f1f0-1f1fc","shortname":":flag_kw:","title":"kuwait"},
                {"id":"1f1f0-1f1fe","shortname":":flag_ky:","title":"cayman islands"},
                {"id":"1f1f0-1f1ff","shortname":":flag_kz:","title":"kazakhstan"},
                {"id":"1f1f1-1f1e6","shortname":":flag_la:","title":"laos"},
                {"id":"1f1f1-1f1e7","shortname":":flag_lb:","title":"lebanon"},
                {"id":"1f1f1-1f1e8","shortname":":flag_lc:","title":"saint lucia"},
                {"id":"1f1f1-1f1ee","shortname":":flag_li:","title":"liechtenstein"},
                {"id":"1f1f1-1f1f0","shortname":":flag_lk:","title":"sri lanka"},
                {"id":"1f1f1-1f1f7","shortname":":flag_lr:","title":"liberia"},
                {"id":"1f1f1-1f1f8","shortname":":flag_ls:","title":"lesotho"},
                {"id":"1f1f1-1f1f9","shortname":":flag_lt:","title":"lithuania"},
                {"id":"1f1f1-1f1fa","shortname":":flag_lu:","title":"luxembourg"},
                {"id":"1f1f1-1f1fb","shortname":":flag_lv:","title":"latvia"},
                {"id":"1f1f1-1f1fe","shortname":":flag_ly:","title":"libya"},
                {"id":"1f1f2-1f1e6","shortname":":flag_ma:","title":"morocco"},
                {"id":"1f1f2-1f1e8","shortname":":flag_mc:","title":"monaco"},
                {"id":"1f1f2-1f1e9","shortname":":flag_md:","title":"moldova"},
                {"id":"1f1f2-1f1ea","shortname":":flag_me:","title":"montenegro"},
                {"id":"1f1f2-1f1eb","shortname":":flag_mf:","title":"saint martin"},
                {"id":"1f1f2-1f1ec","shortname":":flag_mg:","title":"madagascar"},
                {"id":"1f1f2-1f1ed","shortname":":flag_mh:","title":"the marshall islands"},
                {"id":"1f1f2-1f1f0","shortname":":flag_mk:","title":"macedonia"},
                {"id":"1f1f2-1f1f1","shortname":":flag_ml:","title":"mali"},
                {"id":"1f1f2-1f1f2","shortname":":flag_mm:","title":"myanmar"},
                {"id":"1f1f2-1f1f3","shortname":":flag_mn:","title":"mongolia"},
                {"id":"1f1f2-1f1f4","shortname":":flag_mo:","title":"macau"},
                {"id":"1f1f2-1f1f5","shortname":":flag_mp:","title":"northern mariana islands"},
                {"id":"1f1f2-1f1f6","shortname":":flag_mq:","title":"martinique"},
                {"id":"1f1f2-1f1f7","shortname":":flag_mr:","title":"mauritania"},
                {"id":"1f1f2-1f1f8","shortname":":flag_ms:","title":"montserrat"},
                {"id":"1f1f2-1f1f9","shortname":":flag_mt:","title":"malta"},
                {"id":"1f1f2-1f1fa","shortname":":flag_mu:","title":"mauritius"},
                {"id":"1f1f2-1f1fb","shortname":":flag_mv:","title":"maldives"},
                {"id":"1f1f2-1f1fc","shortname":":flag_mw:","title":"malawi"},
                {"id":"1f1f2-1f1fd","shortname":":flag_mx:","title":"mexico"},
                {"id":"1f1f2-1f1fe","shortname":":flag_my:","title":"malaysia"},
                {"id":"1f1f2-1f1ff","shortname":":flag_mz:","title":"mozambique"},
                {"id":"1f1f3-1f1e6","shortname":":flag_na:","title":"namibia"},
                {"id":"1f1f3-1f1e8","shortname":":flag_nc:","title":"new caledonia"},
                {"id":"1f1f3-1f1ea","shortname":":flag_ne:","title":"niger"},
                {"id":"1f1f3-1f1eb","shortname":":flag_nf:","title":"norfolk island"},
                {"id":"1f1f3-1f1ec","shortname":":flag_ng:","title":"nigeria"},
                {"id":"1f1f3-1f1ee","shortname":":flag_ni:","title":"nicaragua"},
                {"id":"1f1f3-1f1f1","shortname":":flag_nl:","title":"the netherlands"},
                {"id":"1f1f3-1f1f4","shortname":":flag_no:","title":"norway"},
                {"id":"1f1f3-1f1f5","shortname":":flag_np:","title":"nepal"},
                {"id":"1f1f3-1f1f7","shortname":":flag_nr:","title":"nauru"},
                {"id":"1f1f3-1f1fa","shortname":":flag_nu:","title":"niue"},
                {"id":"1f1f3-1f1ff","shortname":":flag_nz:","title":"new zealand"},
                {"id":"1f1f4-1f1f2","shortname":":flag_om:","title":"oman"},
                {"id":"1f1f5-1f1e6","shortname":":flag_pa:","title":"panama"},
                {"id":"1f1f5-1f1ea","shortname":":flag_pe:","title":"peru"},
                {"id":"1f1f5-1f1eb","shortname":":flag_pf:","title":"french polynesia"},
                {"id":"1f1f5-1f1ec","shortname":":flag_pg:","title":"papua new guinea"},
                {"id":"1f1f5-1f1ed","shortname":":flag_ph:","title":"the philippines"},
                {"id":"1f1f5-1f1f0","shortname":":flag_pk:","title":"pakistan"},
                {"id":"1f1f5-1f1f1","shortname":":flag_pl:","title":"poland"},
                {"id":"1f1f5-1f1f2","shortname":":flag_pm:","title":"saint pierre and miquelon"},
                {"id":"1f1f5-1f1f3","shortname":":flag_pn:","title":"pitcairn"},
                {"id":"1f1f5-1f1f7","shortname":":flag_pr:","title":"puerto rico"},
                {"id":"1f1f5-1f1f8","shortname":":flag_ps:","title":"palestinian authority"},
                {"id":"1f1f5-1f1f9","shortname":":flag_pt:","title":"portugal"},
                {"id":"1f1f5-1f1fc","shortname":":flag_pw:","title":"palau"},
                {"id":"1f1f5-1f1fe","shortname":":flag_py:","title":"paraguay"},
                {"id":"1f1f6-1f1e6","shortname":":flag_qa:","title":"qatar"},
                {"id":"1f1f7-1f1ea","shortname":":flag_re:","title":"réunion"},
                {"id":"1f1f7-1f1f4","shortname":":flag_ro:","title":"romania"},
                {"id":"1f1f7-1f1f8","shortname":":flag_rs:","title":"serbia"},
                {"id":"1f1f7-1f1fa","shortname":":flag_ru:","title":"russia"},
                {"id":"1f1f7-1f1fc","shortname":":flag_rw:","title":"rwanda"},
                {"id":"1f1f8-1f1e6","shortname":":flag_sa:","title":"saudi arabia"},
                {"id":"1f1f8-1f1e7","shortname":":flag_sb:","title":"the solomon islands"},
                {"id":"1f1f8-1f1e8","shortname":":flag_sc:","title":"the seychelles"},
                {"id":"1f1f8-1f1e9","shortname":":flag_sd:","title":"sudan"},
                {"id":"1f1f8-1f1ea","shortname":":flag_se:","title":"sweden"},
                {"id":"1f1f8-1f1ec","shortname":":flag_sg:","title":"singapore"},
                {"id":"1f1f8-1f1ed","shortname":":flag_sh:","title":"saint helena"},
                {"id":"1f1f8-1f1ee","shortname":":flag_si:","title":"slovenia"},
                {"id":"1f1f8-1f1ef","shortname":":flag_sj:","title":"svalbard and jan mayen"},
                {"id":"1f1f8-1f1f0","shortname":":flag_sk:","title":"slovakia"},
                {"id":"1f1f8-1f1f1","shortname":":flag_sl:","title":"sierra leone"},
                {"id":"1f1f8-1f1f2","shortname":":flag_sm:","title":"san marino"},
                {"id":"1f1f8-1f1f3","shortname":":flag_sn:","title":"senegal"},
                {"id":"1f1f8-1f1f4","shortname":":flag_so:","title":"somalia"},
                {"id":"1f1f8-1f1f7","shortname":":flag_sr:","title":"suriname"},
                {"id":"1f1f8-1f1f8","shortname":":flag_ss:","title":"south sudan"},
                {"id":"1f1f8-1f1f9","shortname":":flag_st:","title":"são tomé and príncipe"},
                {"id":"1f1f8-1f1fb","shortname":":flag_sv:","title":"el salvador"},
                {"id":"1f1f8-1f1fd","shortname":":flag_sx:","title":"sint maarten"},
                {"id":"1f1f8-1f1fe","shortname":":flag_sy:","title":"syria"},
                {"id":"1f1f8-1f1ff","shortname":":flag_sz:","title":"swaziland"},
                {"id":"1f1f9-1f1e6","shortname":":flag_ta:","title":"tristan da cunha"},
                {"id":"1f1f9-1f1e8","shortname":":flag_tc:","title":"turks and caicos islands"},
                {"id":"1f1f9-1f1e9","shortname":":flag_td:","title":"chad"},
                {"id":"1f1f9-1f1eb","shortname":":flag_tf:","title":"french southern territories"},
                {"id":"1f1f9-1f1ec","shortname":":flag_tg:","title":"togo"},
                {"id":"1f1f9-1f1ed","shortname":":flag_th:","title":"thailand"},
                {"id":"1f1f9-1f1ef","shortname":":flag_tj:","title":"tajikistan"},
                {"id":"1f1f9-1f1f0","shortname":":flag_tk:","title":"tokelau"},
                {"id":"1f1f9-1f1f1","shortname":":flag_tl:","title":"timor-leste"},
                {"id":"1f1f9-1f1f2","shortname":":flag_tm:","title":"turkmenistan"},
                {"id":"1f1f9-1f1f3","shortname":":flag_tn:","title":"tunisia"},
                {"id":"1f1f9-1f1f4","shortname":":flag_to:","title":"tonga"},
                {"id":"1f1f9-1f1f7","shortname":":flag_tr:","title":"turkey"},
                {"id":"1f1f9-1f1f9","shortname":":flag_tt:","title":"trinidad and tobago"},
                {"id":"1f1f9-1f1fb","shortname":":flag_tv:","title":"tuvalu"},
                {"id":"1f1f9-1f1fc","shortname":":flag_tw:","title":"the republic of china"},
                {"id":"1f1f9-1f1ff","shortname":":flag_tz:","title":"tanzania"},
                {"id":"1f1fa-1f1e6","shortname":":flag_ua:","title":"ukraine"},
                {"id":"1f1fa-1f1ec","shortname":":flag_ug:","title":"uganda"},
                {"id":"1f1fa-1f1f2","shortname":":flag_um:","title":"united states minor outlying islands"},
                {"id":"1f1fa-1f1f8","shortname":":flag_us:","title":"united states"},
                {"id":"1f1fa-1f1fe","shortname":":flag_uy:","title":"uruguay"},
                {"id":"1f1fa-1f1ff","shortname":":flag_uz:","title":"uzbekistan"},
                {"id":"1f1fb-1f1e6","shortname":":flag_va:","title":"the vatican city"},
                {"id":"1f1fb-1f1e8","shortname":":flag_vc:","title":"saint vincent and the grenadines"},
                {"id":"1f1fb-1f1ea","shortname":":flag_ve:","title":"venezuela"},
                {"id":"1f1fb-1f1ec","shortname":":flag_vg:","title":"british virgin islands"},
                {"id":"1f1fb-1f1ee","shortname":":flag_vi:","title":"u.s. virgin islands"},
                {"id":"1f1fb-1f1f3","shortname":":flag_vn:","title":"vietnam"},
                {"id":"1f1fb-1f1fa","shortname":":flag_vu:","title":"vanuatu"},
                {"id":"1f1fc-1f1eb","shortname":":flag_wf:","title":"wallis and futuna"},
                {"id":"1f1fc-1f1f8","shortname":":flag_ws:","title":"samoa"},
                {"id":"1f1fd-1f1f0","shortname":":flag_xk:","title":"kosovo"},
                {"id":"1f1fe-1f1ea","shortname":":flag_ye:","title":"yemen"},
                {"id":"1f1fe-1f1f9","shortname":":flag_yt:","title":"mayotte"},
                {"id":"1f1ff-1f1e6","shortname":":flag_za:","title":"south africa"},
                {"id":"1f1ff-1f1f2","shortname":":flag_zm:","title":"zambia"},
                {"id":"1f1ff-1f1fc","shortname":":flag_zw:","title":"zimbabwe"},
            ]
        }
    ];

    var defaults = {
        textcontainer: "", /*container for write text*/   
        activetab: "popular-emojis", /*symbols,animals-and-nature,food-and-drink,activity-and-sports,travel-and-places,objects,flags*/
        showintabscontainer: "auto", /*symbol, svg*/
        pathtosvgicons: "src/icons/",
        showtextcontainer: "", /*container for show text*/
        showintextcontainer: "auto", /*symbol, svg*/
        textcontainerheight: "300px",
        textcontainerwidth: "100%",
        charcounter: true,
        charcounterallowed: 1500,       
        charcounterwarning: 25,
        charcounterclassWarning: 'warning',
        charcounterclassExceeded: 'exceeded',
        charcountershowTemplatestandart: '<span></span> symbols left',
        charcountershowTemplatewarning: '<span></span> symbols left',
        charcountershowTemplateexceeded: '<span></span> symbols left',
        charcountertoManyChar:function(el){
            return true;
        },
        charcountercurrentAllowedCharCount : function(el,count){
            return true;
        },
        charcountercurrentchange: function(el){
            return true;
        },
        oninitfinish:function(el){
            return true;
        }
    };

    if (!String.fromCodePoint) {
        (function() {
            var defineProperty = (function() {
                
                try {
                    var object = {};
                    var $defineProperty = Object.defineProperty;
                    var result = $defineProperty(object, object, object) && $defineProperty;
                } catch(error) {}
                return result;
            }());
            var stringFromCharCode = String.fromCharCode;
            var floor = Math.floor;
            var fromCodePoint = function() {
                var MAX_SIZE = 0x4000;
                var codeUnits = [];
                var highSurrogate;
                var lowSurrogate;
                var index = -1;
                var length = arguments.length;
                if (!length) {
                    return '';
                }
                var result = '';
                while (++index < length) {
                    var codePoint = Number(arguments[index]);
                    if (
                        !isFinite(codePoint) ||       
                        codePoint < 0 ||              
                        codePoint > 0x10FFFF ||      
                        floor(codePoint) != codePoint 
                    ) {
                        throw RangeError('Invalid code point: ' + codePoint);
                    }
                    if (codePoint <= 0xFFFF) { 
                        codeUnits.push(codePoint);
                    } else {
                        codePoint -= 0x10000;
                        highSurrogate = (codePoint >> 10) + 0xD800;
                        lowSurrogate = (codePoint % 0x400) + 0xDC00;
                        codeUnits.push(highSurrogate, lowSurrogate);
                    }
                    if (index + 1 == length || codeUnits.length > MAX_SIZE) {
                        result += stringFromCharCode.apply(null, codeUnits);
                        codeUnits.length = 0;
                    }
                }
                return result;
            };
            if (defineProperty) {
                defineProperty(String, 'fromCodePoint', {
                    'value': fromCodePoint,
                    'configurable': true,
                    'writable': true
                });
            } else {
                String.fromCodePoint = fromCodePoint;
            }
        }());
    }

    function needEmojiOneFont(){
        var ua = navigator.userAgent;
        if(/(Windows 10.0|Windows NT 10.0|Windows 8.1|Windows NT 6.3)/.test(ua)||(/Android/.test(ua)&&parseInt(/Android ([\.\_\d]+)/.exec(ua)[1])>=5)){
            return "";
        }
        if(/Android/.test(ua)){
            return "emojione-android-font";
        }
        return "emojione-font";
    }

    function needReplaceToSvg(){
        var ua = navigator.userAgent;
        if(/(Windows 10.0|Windows NT 10.0|Windows 8.1|Windows NT 6.3|iPhone|iPad|iPod|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/.test(ua)||(/Android/.test(ua)&&parseInt(/Android ([\.\_\d]+)/.exec(ua)[1])>=5)){
            return false;
        }
        return true;
    }

    function insertAtCaret(el, options) {
        var emoji = el.data("emojiutfcode");
        var el = el.closest(".prettytextfield").find(".prettytextfield-text-container");
        var x = window.scrollX, y = window.scrollY;
        el.focus();
        window.scrollTo(x, y);
        el = el[0];
        if (document.selection) {
            var sel = document.selection.createRange();
            sel.text = emoji;
        }else if(el.selectionStart || el.selectionStart == 0){
            var startPos = el.selectionStart;
            var endPos = el.selectionEnd;
            el.value = el.value.substring(0, startPos) + emoji + el.value.substring(endPos, el.value.length);
            el.selectionStart = startPos + emoji.length;
            el.selectionEnd = startPos + emoji.length;
        }else{
            el.value += emoji;
        }
        calculechartintextcontainer($(el),options);
    }

    function appendemojistotab(emojiarr,options,obj,container){
        for(var j=0;j<emojiarr.length;j++){
            var utfcode = "";
            var utfcodearr = emojiarr[j].id.split("-");
            for(var uc=0; uc<utfcodearr.length; uc++){
                utfcode += String.fromCodePoint(parseInt(utfcodearr[uc],16));
            }
            var emoji = utfcode;
            if(options.showintabscontainer=="svg"||(options.showintabscontainer=="auto"&&needReplaceToSvg())){
                emoji = "<img alt='"+utfcode+"' src='"+options.pathtosvgicons+emojiarr[j].id+".svg'>";
            }
            container.find(".prettytextfield-emoji-container.prettytextfield-emoji-container-"+obj).addClass("prettytextfield-tab-initiated").append("<a href='' class='prettytextfield-emoji' title='"+emojiarr[j].title+"' data-emojiutfcode='"+utfcode+"' data-emojicode='"+emojiarr[j].shortname+"'>"+emoji+"</a>");
        }
    }

    function initprettytextfieldtextcontainer(options){
        $(options.textcontainer).each(function(){
            var el = $(this);
            if(!el.hasClass("prettytextfield-text-container-initiated")){
                options = $.extend(options,el.data("options"));
                el.attr("data-options",JSON.stringify(options)).data("options",JSON.stringify(options));
                el.addClass("prettytextfield-text-container").addClass("prettytextfield-text-container-initiated").css("height",options.textcontainerheight).wrap("<div class='prettytextfield'></div>");
                el.after("<div class='prettytextfield-box-wrap'><a href='' class='prettytextfield-button prettytextfield-image-button prettytextfield-smiles-and-people'></a><div class='prettytextfield-box'><div class='prettytextfield-box-title'></div></div></div>");
                var container = el.closest(".prettytextfield");
                var emojionefont = needEmojiOneFont();
                if(emojionefont!=""){
                    container.addClass(emojionefont);
                    container.prepend("<div class='prettytextfield-preload-font'>🤗</div>");
                }
                container.css("width",options.textcontainerwidth);
                for(var i=0;i<prettytextfieldmap.length;i++){
                    for(var obj in prettytextfieldmap[i]){
                        container.find(".prettytextfield-box-title").append("<a href='' class='prettytextfield-box-title-button prettytextfield-image-button prettytextfield-"+obj+"' title='"+obj+"' data-index='"+i+"' data-folder='"+obj+"'></a>");
                        container.find(".prettytextfield-box").append("<div class='prettytextfield-emoji-container prettytextfield-emoji-container-"+obj+"'></div>");
                        if(options.activetab==obj){
                            container.find(".prettytextfield-box-title-button.prettytextfield-"+obj).addClass("active");
                            container.find(".prettytextfield-emoji-container.prettytextfield-emoji-container-"+obj).addClass("active");
                        }
                    }
                }

                container.on("click",".prettytextfield-box-title-button",function(){
                    var cel = $(this);
                    container.find(".prettytextfield-box-title-button.active, .prettytextfield-emoji-container.active").removeClass("active");
                    cel.addClass("active");
                    var obj = cel.data("folder");
                    var ctab = container.find(".prettytextfield-emoji-container.prettytextfield-emoji-container-"+obj);
                    if(!ctab.hasClass("prettytextfield-tab-initiated")){
                        appendemojistotab(prettytextfieldmap[cel.data("index")][obj],options,obj,container);
                    }
                    ctab.addClass("active");
                    return false;
                });

                container.on("click",".prettytextfield-button",function(){
                    container.find(".prettytextfield-box").toggleClass("active");
                    var ctab = container.find(".prettytextfield-emoji-container.prettytextfield-emoji-container-"+options.activetab);
                    if(!ctab.hasClass("prettytextfield-tab-initiated")){
                        appendemojistotab(prettytextfieldmap[$(".prettytextfield-box-title-button[data-folder='"+options.activetab+"']").data("index")][options.activetab],options,options.activetab,container);
                    }
                    return false;
                });
                
                container.on("click",".prettytextfield-emoji-container .prettytextfield-emoji", function(){ insertAtCaret($(this),options); return false; });
                if(options.charcounter){
                    container.find(".prettytextfield-box-wrap .prettytextfield-button").before("<div class='prettytextfield-char-counter'></div>");
                    el.on("keyup focus blur paste",function(){ 
                        calculechartintextcontainer($(this),options); 
                    });
                    calculechartintextcontainer(el,options);
                }
                options.oninitfinish(el);
            }
        });
    }

    function initprettytextfieldshowtextcontainer(options){
        $(options.showtextcontainer).each(function(){
            var el = $(this);
            if(!el.hasClass("prettytextfield-show-text-container-initiated")){
                el.addClass(needEmojiOneFont()).addClass("prettytextfield-show-text-container-initiated").addClass("prettytextfield-show-text-container");
                var el_html = el.html();
                if(options.showintextcontainer=="svg"||(options.showintextcontainer=="auto"&&needReplaceToSvg())){
                    var makedsymbols = [];
                    for(var i=0;i<prettytextfieldmap.length;i++){
                        for(var obj in prettytextfieldmap[i]){
                            for(var j=0;j<prettytextfieldmap[i][obj].length;j++){
                                if(makedsymbols.indexOf(prettytextfieldmap[i][obj][j].id)==-1){
                                    var utfcode = "";
                                    var utfcodearr = prettytextfieldmap[i][obj][j].id.split("-");
                                    for(var uc=0; uc<utfcodearr.length; uc++){
                                        utfcode += String.fromCodePoint(parseInt(utfcodearr[uc],16));
                                    }
                                    if(el_html.indexOf(utfcode)!=-1){                                    
                                        el_html=el_html.replace(new RegExp(utfcode, 'g'), "<img class='prettytextfield-sng-in-show-text-container' alt='"+utfcode+"' src='"+options.pathtosvgicons+prettytextfieldmap[i][obj][j].id+".svg'>");
                                    }
                                }
                                makedsymbols.push(prettytextfieldmap[i][obj][j].id);
                            }
                        }
                    }
                }
                el.html(el_html);
            }
        });
    }

    function calculechartintextcontainer(el,globaloptions){
        var options = JSON.parse(el.data("options"));
        var leftcharscont = el.closest(".prettytextfield").find(".prettytextfield-char-counter");
        var count = el.val().length;
        var available = parseInt(options.charcounterallowed) - count;
        leftcharscont.removeClass(options.charcounterclassWarning).removeClass(options.charcounterclassExceeded).html(options.charcountershowTemplatestandart);
        if(available<=0){
            el.val(el.val().substring(0,parseInt(options.charcounterallowed)));
            leftcharscont.addClass(options.charcounterclassExceeded).html(options.charcountershowTemplateexceeded);
            globaloptions.charcountertoManyChar(el);
        }else{
            if(available<=parseInt(options.charcounterwarning)){
                leftcharscont.addClass(options.charcounterclassWarning).html(options.charcountershowTemplatewarning);
            }
        }
        leftcharscont.find("span").html((available<0)?0:available);
        globaloptions.charcountercurrentAllowedCharCount(el,(available<0)?0:available);
        globaloptions.charcountercurrentchange(el);
    }

    function _prettytextfield(options) {
        var options = $.extend({},defaults, options);
        initprettytextfieldtextcontainer(options);
        initprettytextfieldshowtextcontainer(options);
    }

    if ( typeof $ !== 'undefined' ) {
        $.fn.prettytextfield = function(options) {
            _prettytextfield(options);
        };
        $.prettytextfield = _prettytextfield;
    } else {
        window.prettytextfield = _prettytextfield;
    }
});