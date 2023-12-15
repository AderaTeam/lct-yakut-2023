import torch
from functions.getters.vk.get_vk_user_subscribes import getVkUserSubscribes
from functions.getters.vk.get_vk_user_main_info import getVkUserMainInfo
from functions.getters.vk.get_vk_user_wall import getVkUserWallInfo
from functions.def_inititor import defInitiator
from functions.values_inititor import valuesInitiator
from functions.processor.stopwords_cleaner import stopwordsCleaner
from functions.processor.text_normalizer import textNormalizer
from functions.processor.leader_id_main_user_info_processor import leaderIdMainUserInfoProcessor
from functions.getters.leader_id.get_leader_id_main_user_info import mainLeaderIdUserInfo
from fastapi import FastAPI
import ioc
import pandas as pd
import numpy as np

import vk_api
import json

app = FastAPI()
defInitiator()
valuesInitiator()

# 2234799
@app.get("/leaderid/simple_analize_interests")
def root(user_id: int, n_of_works: int=-1):
    res = ioc.require('leaderidUserInterestsAnalizer')(user_id, n_of_works)
    return res


@app.get("/leaderid/simple_analize_interests_")
def root(user_id: int, n_of_works: int=-1):
    res = ioc.require('leaderidUserInterestsAnalizer')(user_id, n_of_works)
    return res

# 393854543
@app.get("/vk/simple_analize_interests")
def root(user_id: int, n_of_works: int=-1):
    prof_ways_data = ioc.require('profWaysData').reset_index()
    text_samples_vectors = ioc.require('smallDescriptionVectors')
    vectorizer = ioc.require('stdTextVectorizer')
    vk_session = ioc.require('vkSession')
    subscribes = ioc.require('getVkUserSubscribes')(vk_session=vk_session, user_id=user_id)
    subscribes_processed = ioc.require('vkSubscribesProcessor')(subscribes)
    texts = []
    for i in subscribes_processed:
        texts += ioc.require('vkWallMainInfoTextExtractor')(i['main_description'][0])
    v = torch.zeros(1024)
    for i in texts:
        v += vectorizer(i, 100)
    res = ioc.require('simpleDistAnalizer')(v, text_samples_vectors)
    res_i = np.argsort(res.to_numpy())[::-1]
    print(prof_ways_data.shape, res.shape, res_i)
    return {prof_ways_data['Название профессии'][i]: res[i] for i in res_i[0:n_of_works-1]}

