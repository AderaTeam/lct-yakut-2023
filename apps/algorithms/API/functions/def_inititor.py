from functions.analizers.leader_id.leaderid_user_interests_analizer import leaderidUserInterestsAnalizer
from functions.processor.text_vectorizer import textVectorizer
from functions.analizers.simple_dist_analizer import simpleDistAnalizer
from functions.processor.stopwords_cleaner import stopwordsCleaner
from functions.processor.text_normalizer import textNormalizer
from functions.processor.leader_id_main_user_info_processor import leaderIdMainUserInfoProcessor
from functions.getters.leader_id.get_leader_id_main_user_info import mainLeaderIdUserInfo
import ioc

def defInitiator():
    ioc.provide('stdLeaderIdTextNormalization', textNormalizer)
    ioc.provide('stdLeaderIdMainUserInfoProcessor', leaderIdMainUserInfoProcessor)
    ioc.provide('stdLeaderIdStopWordsCleaner', stopwordsCleaner)
    ioc.provide('simpleDistAnalizer', simpleDistAnalizer)
    ioc.provide('stdTextVectorizer', textVectorizer)
    ioc.provide('leaderidUserInterestsAnalizer', leaderidUserInterestsAnalizer)
    