from bs4.element import Tag, ResultSet
import ioc

def leaderIdMainUserInfoProcessor(block: ResultSet):
    textNormalization = ioc.require('stdLeaderIdTextNormalization')
    clearFromStopwords = ioc.require('stdLeaderIdStopWordsCleaner')
    stopwords = ioc.require('stopwords')
    if textNormalization(block[1].h3.text) == 'Интересы':
        return set(filter(len, [clearFromStopwords(textNormalization(i.text),
         sw=stopwords).lower() for i in  block[0].find_all('span')]))
    if textNormalization(block[1].h3.text) == 'Команды':
        return {clearFromStopwords(textNormalization(j.text), sw=stopwords).lower(): clearFromStopwords(textNormalization(i.text), sw=stopwords).lower() for i, j in zip(block[1].find_all('h4'), block[2].find_all('p'))}
    if textNormalization(block[2].h3.text) == 'Активность':
        return {clearFromStopwords(textNormalization(i.text), sw=stopwords).lower(): i['href'] for i in block[2].find_all('a')}
    return block[2]