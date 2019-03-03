const str = 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.' +
    ' Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, ' +
    'а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации ' +
    '"Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML ' +
    'используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" ' +
    'сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы ' +
    'текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно ' +
    '(например, юмористические варианты).';

const divideIt = (data, params) => {
    if (data.length === 0) {
        console.log('No data...');
        return;
    }

    const {len, lines} = params;
    let res = [],
        words = data.split(' ');
        words = words.filter(function (el) { return el !== ''; });

    const addLines = () => {
        if (!words.length) return false;

        let line = [];
        while (words.length){
            line.push(words.splice(0, 1));
            if (line.join(' ').length > len){
                break;
            }
        }
        return line.join(' ');
    };

    for (let line = 0; line < lines; line++) {
        let line = addLines();
        if (line) res.push(line);
    }
    return `${res.join('<br />')}...`;
};

console.log(divideIt(str, {len: 50, lines: 2}));
