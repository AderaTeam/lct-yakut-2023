from functions.def_inititor import defInitiator
from functions.values_inititor import valuesInitiator
from functions.processor.stopwords_cleaner import stopwordsCleaner
from functions.processor.text_normalizer import textNormalizer
from functions.processor.leader_id_main_user_info_processor import leaderIdMainUserInfoProcessor
from functions.getters.leader_id.get_leader_id_main_user_info import mainLeaderIdUserInfo
from fastapi import FastAPI
import ioc
import pandas as pd

app = FastAPI()
defInitiator()
valuesInitiator()

# 2234799
@app.get("/leaderid/simple_analize")
def root(user_id: int, n_of_works: int=-1):
    prof_ways_data = ioc.require('profWaysData').reset_index()
    data = mainLeaderIdUserInfo(user_id)
    leaderidUserInterestsAnalizer = ioc.require('leaderidUserInterestsAnalizer')
    # print(data, end='\n\n\n')
    # print(data)
    res = leaderidUserInterestsAnalizer(data['Интересы'])
    res = res.sort_values(ascending=0)
    return {prof_ways_data['Название профессии'][i]: res[i] for i in res.index.to_list()[0:n_of_works]}