const num_map = {"6f732": 6, "72ef1": 9, "7d3ae": 2, "a8f2e": 0, "aa86e": 7, "c15f9": 1, "c2e7a": 4, "e7f11": 5, "f8b41": 3, "fc6a6": 8}
/* const code = ['b0cf', 'b27a', 'b305', 'b36e', 'b370', 'b3a2', 'b3ca', 'b425', 'b47d', 'b538', 'b6f2', 'b70d', 'b73a', 'b883',
        'b8b0', 'b8c1', 'b8de', 'b8df', 'b907', 'b90d', 'ba7a', 'bb66', 'bbbe', 'bc34', 'bc45', 'bcb9', 'bd0b', 'bd4b',
        'bebd', 'bedf', 'bef6', 'bf6f', 'bf7b', 'bf8e', 'c620', 'c621', 'c622', 'c623', 'c624', 'c625', 'c626', 'c627',
        'c628', 'c629', 'c62a', 'c62b', 'c62c', 'c62d', 'c62e', 'c62f', 'c630', 'c631', 'c632', 'c633', 'c634', 'c635',
        'c636', 'c637', 'c638', 'c639', 'c63a', 'c63b', 'c63c', 'c63d', 'c63e', 'c63f', 'c640', 'c641', 'c642', 'c643',
        'c644', 'c645', 'c646', 'c647', 'c648', 'c649', 'c64a', 'c64b', 'c64c', 'c64d', 'c64e', 'c64f', 'c650', 'c651',
        'c652', 'c653', 'c654', 'c655', 'c656', 'c657', 'c658', 'c659', 'c65a', 'c65b', 'c65c', 'c65d', 'c65e', 'c65f',
        'c660', 'c661', 'c662', 'c663', 'c664', 'c665', 'c666', 'c667', 'c668', 'c669', 'c66a', 'c66b', 'c66c', 'c66d',
        'c66e', 'c66f', 'c670', 'c671', 'c672', 'c673', 'c674', 'c675', 'c676', 'c677', 'c678', 'c679', 'c67a', 'c67b',
        'c67c', 'c67d', 'c67e', 'c67f', 'c680', 'c681', 'c682', 'c683', 'c684', 'c685', 'c686', 'c687', 'c688', 'c689',
        'c68a', 'c68b', 'c68c', 'c68d', 'c68e', 'c68f', 'c690', 'c691', 'c692', 'c693', 'c694', 'c695', 'c696', 'c697',
        'c698', 'c699', 'c69a', 'c69b', 'c69c', 'c69d', 'c69e', 'c69f', 'c6a0', 'c6a1', 'c6a2', 'c6a3', 'c6a4', 'c6a5',
        'c6a6', 'c6a7', 'c6a8', 'c6a9', 'c6aa', 'c6ab', 'c6ac', 'c6ad', 'c6ae', 'c6af', 'c6b0', 'c6b1', 'c6b2', 'c6b3',
        'c6b4', 'c6b5', 'c6b6', 'c6b7', 'c6b8', 'c6b9', 'c6ba', 'c6bb', 'c6bc', 'c6bd', 'c6be', 'c6bf', 'c6c0', 'c6c1',
        'c6c2', 'c6c3', 'c6c4', 'c6c5', 'c6c6', 'c6c7', 'c6c8', 'c6c9', 'c6ca', 'c6cb', 'c6cc', 'c6cd', 'c6ce', 'c6cf',
        'c6d0', 'c6d1', 'c6d2', 'c6d3', 'c6d4', 'c6d5', 'c6d6', 'c6d7', 'c6d8', 'c6d9', 'c6da', 'c6db', 'c6dc', 'c6dd',
        'c6de', 'c6df', 'c6e0', 'c6e1', 'c6e2', 'c6e3', 'c6e4', 'c6e5', 'c6e6', 'c6e7', 'c6e8', 'c6e9', 'c6ea', 'c6eb',
        'c6ec', 'c6ed', 'c6ee', 'c6ef', 'c6f0', 'c6f1', 'c6f2', 'c6f3', 'c6f4', 'c6f5', 'c6f6', 'c6f7', 'c6f8', 'c6f9',
        'c6fa', 'c6fb', 'c6fc', 'c6fd', 'c6fe', 'c6ff', 'c700', 'c701', 'c702', 'c703', 'c704', 'c705', 'c706', 'c707',
        'c708', 'c709', 'c70a', 'c70b', 'c70c', 'c70d', 'c70e', 'c70f', 'c710', 'c711', 'c712', 'c713', 'c714', 'c715',
        'c716', 'c717', 'c718', 'c719', 'c71a', 'c71b', 'c71c', 'c71d', 'c71e', 'c71f', 'c720', 'c721', 'c722', 'c723',
        'c724', 'c725', 'c726', 'c727', 'c728', 'c729', 'c72a', 'c72b', 'c72c', 'c72d', 'c72e', 'c72f', 'c730', 'c731',
        'c732', 'c733', 'c734', 'c735', 'c736', 'c737', 'c738', 'c739', 'c73a', 'c73b', 'c73c', 'c73d', 'c73e', 'c73f',
        'c740', 'c741', 'c742', 'c743', 'c744', 'c745', 'c746', 'c747', 'c748', 'c749', 'c74a', 'c74b', 'c74c', 'c74d',
        'c74e', 'c74f', 'b8c', '5386']
const word = ['???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???',
        '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '(', ')', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '???', '???'] */

const cn_map = {"5386":"???","b0cf":"???","b27a":"???","b305":"???","b36e":"???","b370":"???","b3a2":"???",
        "b3ca":"???","b425":"???","b47d":"???","b538":"???","b6f2":"???","b70d":"???","b73a":"???","b883":"???",
        "b8b0":"???","b8c1":"???","b8de":"???","b8df":"???","b907":"???","b90d":"???","ba7a":"???","bb66":"???",
        "bbbe":"???","bc34":"???","bc45":"???","bcb9":"???","bd0b":"???","bd4b":"???","bebd":"???","bedf":"???",
        "bef6":"???","bf6f":"???","bf7b":"???","bf8e":"???","c620":"???","c621":"???","c622":"???","c623":"???",
        "c624":"???","c625":"???","c626":"???","c627":"???","c628":"???","c629":"???","c62a":"???","c62b":"???",
        "c62c":"???","c62d":"???","c62e":"???","c62f":"???","c630":"???","c631":"???","c632":"???","c633":"???",
        "c634":"???","c635":"???","c636":"???","c637":"???","c638":"???","c639":"???","c63a":"???","c63b":"???",
        "c63c":"???","c63d":"???","c63e":"???","c63f":"???","c640":"???","c641":"???","c642":"???","c643":"???",
        "c644":"???","c645":"???","c646":"???","c647":"???","c648":"???","c649":"???","c64a":"???","c64b":"???",
        "c64c":"???","c64d":"???","c64e":"???","c64f":"???","c650":"???","c651":"???","c652":"???","c653":"???",
        "c654":"???","c655":"???","c656":"???","c657":"???","c658":"???","c659":"???","c65a":"???","c65b":"???",
        "c65c":"???","c65d":"???","c65e":"???","c65f":"???","c660":"???","c661":"???","c662":"???","c663":"???",
        "c664":"???","c665":"???","c666":"???","c667":"???","c668":"???","c669":"???","c66a":"???","c66b":"???",
        "c66c":"???","c66d":"???","c66e":"???","c66f":"???","c670":"???","c671":"???","c672":"???","c673":"???",
        "c674":"???","c675":"???","c676":"???","c677":"???","c678":"???","c679":"???","c67a":"???","c67b":"???",
        "c67c":"???","c67d":"???","c67e":"???","c67f":"???","c680":"???","c681":"???","c682":"???","c683":"???",
        "c684":"???","c685":"???","c686":"???","c687":"???","c688":"???","c689":"???","c68a":"???","c68b":"???",
        "c68c":"???","c68d":"???","c68e":"???","c68f":"???","c690":"???","c691":"???","c692":"???","c693":"???",
        "c694":"???","c695":"???","c696":"???","c697":"???","c698":"???","c699":"???","c69a":"???","c69b":"???",
        "c69c":"???","c69d":"???","c69e":"???","c69f":"???","c6a0":"???","c6a1":"???","c6a2":"???","c6a3":"???",
        "c6a4":"???","c6a5":"???","c6a6":"???","c6a7":"???","c6a8":"???","c6a9":"???","c6aa":"???","c6ab":"???",
        "c6ac":"???","c6ad":"???","c6ae":"???","c6af":"???","c6b0":"???","c6b1":"???","c6b2":"???","c6b3":"???",
        "c6b4":"???","c6b5":"???","c6b6":"???","c6b7":"???","c6b8":"???","c6b9":"???","c6ba":"???","c6bb":"???",
        "c6bc":"???","c6bd":"???","c6be":"???","c6bf":"???","c6c0":"???","c6c1":"???","c6c2":"???","c6c3":"???",
        "c6c4":"???","c6c5":"???","c6c6":"???","c6c7":"???","c6c8":"???","c6c9":"???","c6ca":"???","c6cb":"???",
        "c6cc":"???","c6cd":"???","c6ce":"???","c6cf":"???","c6d0":"???","c6d1":"???","c6d2":"???","c6d3":"???",
        "c6d4":"???","c6d5":"???","c6d6":"???","c6d7":"???","c6d8":"???","c6d9":"???","c6da":"???","c6db":"???",
        "c6dc":"???","c6dd":"???","c6de":"???","c6df":"???","c6e0":"???","c6e1":"???","c6e2":"???","c6e3":"???",
        "c6e4":"???","c6e5":"???","c6e6":"???","c6e7":"???","c6e8":"???","c6e9":"???","c6ea":"???","c6eb":"???",
        "c6ec":"???","c6ed":"???","c6ee":"???","c6ef":"???","c6f0":"???","c6f1":"???","c6f2":"???","c6f3":"???",
        "c6f4":"???","c6f5":"???","c6f6":"???","c6f7":"???","c6f8":"???","c6f9":"???","c6fa":"???","c6fb":"???",
        "c6fc":"???","c6fd":"???","c6fe":"???","c6ff":"???","c700":"???","c701":"???","c702":"???","c703":"???",
        "c704":"???","c705":"???","c706":"???","c707":"???","c708":"???","c709":"???","c70a":"???","c70b":"???",
        "c70c":"???","c70d":"???","c70e":"???","c70f":"???","c710":"(","c711":")","c712":"0","c713":"1",
        "c714":"2","c715":"3","c716":"4","c717":"5","c718":"6","c719":"7","c71a":"8","c71b":"9","c71c":"A",
        "c71d":"B","c71e":"C","c71f":"D","c720":"E","c721":"F","c722":"G","c723":"H","c724":"I","c725":"J",
        "c726":"K","c727":"L","c728":"M","c729":"N","c72a":"O","c72b":"P","c72c":"Q","c72d":"R","c72e":"S",
        "c72f":"T","c730":"U","c731":"V","c732":"W","c733":"X","c734":"Y","c735":"Z","c736":"a","c737":"b",
        "c738":"c","c739":"d","c73a":"e","c73b":"f","c73c":"g","c73d":"h","c73e":"i","c73f":"j","c740":"k",
        "c741":"l","c742":"m","c743":"n","c744":"o","c745":"p","c746":"q","c747":"r","c748":"s","c749":"t",
        "c74a":"u","c74b":"v","c74c":"w","c74d":"x","c74e":"y","c74f":"z","b8c":"???"}

module.exports = {
    num_map: num_map,
/*    cn_word: word,
    cn_code: code, */
    cn_map: cn_map
}