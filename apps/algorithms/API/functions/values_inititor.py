from functions.processor.stopwords_cleaner import stopwordsCleaner
from functions.processor.text_normalizer import textNormalizer
from functions.processor.leader_id_main_user_info_processor import leaderIdMainUserInfoProcessor
from functions.getters.leader_id.get_leader_id_main_user_info import mainLeaderIdUserInfo
from transformers import AutoModel, AutoTokenizer


import ioc
import pandas as pd
import torch


def valuesInitiator():
    tokenizer = AutoTokenizer.from_pretrained("ai-forever/sbert_large_nlu_ru")
    vectorizer = AutoModel.from_pretrained("ai-forever/sbert_large_nlu_ru")
    with open('../DATA/less_semantic_words.txt', 'r', encoding='utf-8') as f:
        stopwords = pd.Series(f.read().split('\n')).unique()
    small_description_vectors = torch.load('../DATA/small_description_vectors.pt')
    prof_ways_data = pd.read_excel('../DATA/Профессии_ОКСО_ ЛЦТ_Профилум.xlsx', index_col='№').loc[:, ['Отрасль текстом', 'Название профессии']]

    

    ioc.provide('stopwords', stopwords)
    ioc.provide('stdTokenizer', tokenizer)
    ioc.provide('stdVectorizer', vectorizer)
    ioc.provide(
        'usefullLeaderIdMainParams', 
        [
            'Интересы', 
            'Активность', 
            'Команды'
        ]
    )
    ioc.provide('smallDescriptionVectors', small_description_vectors)
    ioc.provide('profWaysData', prof_ways_data)
