declare module 'react-native-navigation' {
    type Tab = {
      testID?: string,
      screen: string,
      label?: string,
      title?: string,
      icon?: any,
      selectedIcon?: any,
      navigatorStyle?: object,
    };
  
    type Drawer = {
      screen: string,
      passProps?: object,
      navigatorStyle?: object,
    };
  
    export const Navigation: {
      registerComponent: (screen: string, fn: () => any) => void,
      startSingleScreenApp: (params: {
        animationType?: 'none' | 'slide-down' | 'fade',
        screen: {
          screen: string,
          title?: string,
          navigatorStyle?: object,
          navigatorButtons?: object,
          overrideBackPress?: boolean,
        },
        appStyle: {
          orientation?: 'auto' | 'landscape' | 'portrait',
        },
      }) => void,
      startTabBasedApp: (params: {
        animationType?: 'none' | 'slide-down' | 'fade',
        tabs: Tab[],
        drawer: {
          left?: Drawer,
          right?: Drawer,
          disableOpenGesture?: boolean,
        },
        tabsStyle?: {
          tabBarHidden?: boolean, // make the tab bar hidden
          tabBarButtonColor?: Color, // change the color of the tab icons and text (also unselected)
          tabBarSelectedButtonColor?: Color, // change the color of the selected tab icon and text (only selected)
          tabBarBackgroundColor?: Color // change the background color of the tab bar
          tabBarTranslucent?: boolean// change the translucent of the tab bar to false
          tabBarTextFontFamily?: string //change the tab font family
          tabBarLabelColor?: Color, // iOS only. change the color of tab text
          tabBarSelectedLabelColor?: Color, // iOS only. change the color of the selected tab text
          forceTitlesDisplay?: boolean// Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
          tabBarHideShadow?: boolean// iOS only. Remove default tab bar top shadow (hairline)
        },
        appStyle?: {
          tabBarBackgroundColor?: Color,
          tabBarButtonColor?: Color,
          tabBarSelectedButtonColor?: Color,
          tabBarTranslucent?: boolean,
          tabFontFamily?: string,  // existing font family name or asset file without extension which can be '.ttf' or '.otf' (searched only if '.ttf' asset not found)
          tabFontSize?: number,
          selectedTabFontSize?: number,
          orientation?: 'auto' | 'landscape' | 'portrait',
        },
      }) => void;
      showModal: (params: {
        screen: string,
        title?: string,
        passProps?: object,
        navigatorStyle?: object,
        animationType?: 'none' | 'slide-up',
      } = {}) => void;
      dismissAllModals: (params: {
        animationType?: 'none' | 'slide-down',
      } = {}) => void;
      dismissModal: (params: {
        animationType?: 'none' | 'slide-down',
      } = {}) => void;
      appMode: () => 'tabs' | 'single' | undefined,
    };
  }
  
  type LeftNavButton = {
    title?: string,
    icon?: any,
    id?: 'back' | 'cancel' | 'accept' | 'sideMenu', // for left nav button to work on android it must be from this selection :-P
    testID?: string,
    disabled?: boolean,
    disableIconTint?: boolean,
    showAsAction?: string,
    buttonColor?: string,
    buttonFontSize?: number,
    buttonFontWeight?: string,
  };
  
  type RightNavButton = {
    title?: string,
    icon?: any,
    id?: string,
    testID?: string,
    disabled?: boolean,
    disableIconTint?: boolean,
    showAsAction?: string,
    buttonColor?: string,
    buttonFontSize?: number,
    buttonFontWeight?: string,
  };
  
  type NavButtons = {
    leftButtons?: LeftNavButton[],
    rightButtons?: RightNavButton[],
  }
  
  type NavigatorEvent = {
    type: 'NavBarButtonPress' | 'ScreenChangedEvent' | 'DeepLink',
    id: string,
    link: string,
    payload?: string,
  };
  
  type NavigatorStyle = {
    // Common
    navBarTextColor?: string, // change the text color of the title (remembered across pushes)
    navBarTextFontSize?: number, // change the font size of the title
    navBarTextFontFamily?: string, // Changes the title font
    navBarBackgroundColor?: string, // change the background color of the nav bar (remembered across pushes)
    navBarCustomView?: string, // registered component name
    navBarComponentAlignment?: string, // center/fill
    navBarCustomViewInitialProps?: object, // Serializable JSON passed as props
    navBarButtonColor?: string, // Change color of nav bar buttons (eg. the back button) (remembered across pushes)
    navBarHidden?: boolean, // make the nav bar hidden
    navBarHideOnScroll?: boolean, // make the nav bar hidden only after the user starts to scroll
    navBarTranslucent?: boolean, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
    navBarTransparent?: boolean, // make the nav bar transparent, works best with drawUnderNavBar:true,
    navBarNoBorder?: boolean, // hide the navigation bar bottom border (hair line). Default false
    drawUnderNavBar?: boolean, // draw the screen content under the nav bar, works best with navBarTranslucent:true
    drawUnderTabBar?: boolean, // draw the screen content under the tab bar (the tab bar is always translucent)
    statusBarBlur?: boolean, // blur the area under the status bar, works best with navBarHidden:true
    navBarBlur?: boolean, // blur the entire nav bar, works best with drawUnderNavBar:true
    tabBarHidden?: boolean, // make the screen content hide the tab bar (remembered across pushes)
    statusBarTextColorScheme?: 'dark' | 'light', // text color of status bar, 'dark' / 'light' (remembered across pushes)
    navBarSubtitleColor?: string, // subtitle color
    navBarSubtitleFontFamily?: string, // subtitle font
    screenBackgroundColor?: string, // Default screen color, visible before the actual react view is rendered
    orientation?: 'auto' | 'landscape' | 'portrait' // Sets a specific orientation to a modal and all screens pushed to it.  Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
  
    // iOS only
    statusBarTextColorSchemeSingleScreen?: 'dark' | 'light', // same as statusBarTextColorScheme but does NOT remember across pushes
    statusBarHideWithNavBar?: boolean, // hide the status bar if the nav bar is also hidden, useful for navBarHidden:true
    statusBarHidden?: boolean, // make the status bar hidden regardless of nav bar state
  
    disabledBackGesture?: boolean, // default: false. Disable the back gesture (swipe gesture) in order to pop the top screen.
    screenBackgroundImageName?: string, // Optional. default screen background image.
    rootBackgroundImageName?: string, // Static while you transition between screens. Works best with screenBackgroundColor: 'transparent'
  
    navBarButtonFontSize?: number, // Change font size nav bar buttons (eg. the back button) (remembered across pushes)
    navBarButtonFontWeight?: string, // Change font weight nav bar buttons (eg. the back button) (remembered across pushes)
  
    navBarLeftButtonFontSize?: number, // Change font size of left nav bar button
    navBarLeftButtonColor?: string, // Change color of left nav bar button
    navBarLeftButtonFontWeight?: string, // Change font weight of left nav bar button
  
    navBarRightButtonFontSize?: number, // Change font size of right nav bar button
    navBarRightButtonColor?: string, // Change color of right nav bar button
    navBarRightButtonFontWeight?: string, // Change font weight of right nav bar button
  
    // Android only
    navigationBarColor?: string, // change the background color of the bottom native navigation bar.
    navBarTitleTextCentered?: boolean, // default: false. centers the title.
    topBarElevationShadowEnabled?: boolean, // default: true. Disables TopBar elevation shadow on Lolipop and above
    statusBarColor?: string, // change the color of the status bar.
    collapsingToolBarImage?: string, // Collapsing Toolbar image.
    collapsingToolBarImage?: any, // Collapsing Toolbar image. Either use a url or require a local image.
    collapsingToolBarCollapsedColor?: string, // Collapsing Toolbar scrim color.
  };
  
  type INavigatorOriginal = {
    setTabBadge: (params: {
      tabIndex?: number, // (optional) if missing, the badge will be added to this screen's tab
      badge: number | null, // badge value, null to remove badge
      badgeColor?: Color, // (optional) if missing, the badge will use the default color
    }) => void,
    setStyle: (params: NavigatorStyle) => void,
    setTitle: (params: { title: string }) => void,
    setSubTitle: (params: { subtitle: string }) => void,
    setButtons: (params: {
      leftButtons?: LeftNavButton[],
      rightButtons?: RightNavButton[],
      animated?: boolean,
    }) => void,
    toggleTabs: (params: {
      to: 'hidden' | 'shown',
      animated: boolean,
    }) => void,
    switchToTab: (params?: { tabIndex: number, }) => void,
    setOnNavigatorEvent: (handler: (event: NavigatorEvent) => void) => void,
    handleDeepLink: (params: {
      link: string,
      payload?: string,
    }) => void,
    dismissModal: (params: {
      animationType?: 'none' | 'slide-down',
    } = {}) => void;
    resetTo: (params: {
      screen: string,
      title?: string,
      passProps?: object,
      animated?: boolean,
      navigatorStyle?: object,
      navigatorButtons?: object,
    }) => void;
    showModal: <Props extends {}>(params: {
      screen: string,
      title?: string,
      passProps: Props,
      navigatorStyle?: object,
      animationType?: 'none' | 'slide-up',
    } = {}) => void;
    showModal: (params: {
      screen: string,
      title?: string,
      passProps?: object,
      navigatorStyle?: object,
      animationType?: 'none' | 'slide-up',
    } = {}) => void;
    push: <Props extends {}>(params: {
      screen: string,
      title?: string,
      titleImage?: any,
      passProps: Props,
      animated?: boolean,
      backButtonTitle?: string,
      backButtonHidden?: boolean,
      overrideBackPress?: boolean,
      navigatorStyle?: NavigatorStyle,
      navigatorButtons?: object,
    }) => void,
    pop: (params: {
      animated?: boolean,
    } = {}) => void,
    popToRoot: (params: {
      animated?: boolean,
    } = {}) => void,
    showLightBox: (params: {
      screen: string,
      passProps?: object,
      style?: {
        backgroundBlur?: 'dark' | 'light' | 'xlight' | 'none',
        backgroundColor?: string,
      }
    }) => void,
    dismissLightBox: () => void,
    toggleDrawer: (params: {
      side: 'left' | 'right',
      animated?: boolean,
      to?: 'open' | 'closed',
    }) => void,
    toggleNavBar: (params: {
      to: 'shown' | 'hidden',
      animated?: boolean,
    }) => void,
  }
  
  type INavigator = INavigatorOriginal & {
    addNavigatorEventListener: (fn: (e: NavigatorEvent) => void) => void,
    removeNavigatorEventListener: (fn: (e: NavigatorEvent) => void) => void,
  }
  
  type NavigatorProps = {
    navigator: INavigator,
  };

  declare module 'react-native-camera-kit' {
    const CameraKitGallery: {
      getAlbumsWithThumbnails: () => Promise<{ albums: any }>,
      getImageUriForId: () => Promise<ImageInfo | undefined>,
      getImagesForIds: (images: string[]) => Promise<{ images: ImageInfo[] }>,
      getImageForTapEvent,
      getImagesForCameraEvent,
      checkDevicePhotosAuthorizationStatus: () => Promise<boolean>,
      requestDevicePhotosAuthorization: () => Promise<boolean>,
      resizeImage
    }
    const CameraKitCamera: {
      cameraOptions?: {
        flashMode?: 'auto' | 'off' | 'on',
        focusMode?: 'off' | 'on',
        zoomMode?: 'off' | 'on',
        ratioOverlay?: '1:1',
        ratioOverlayColor?: Color,
      },
      checkDeviceCameraAuthorizationStatus: () => Promise<boolean>,
      requestDeviceCameraAuthorization: () => Promise<boolean>,
      capture: (shouldSaveToCameraRoll: booelean) => Promise<any>,
      setFlashMode: (mode: 'auto' | 'on' | 'off') => Promise<boolean>,
      changeCamera: () => Promise<boolean>,
    },
    const CameraKitGalleryView: (props: {
      ref?: (r: any) => void,
      //imageStrokeColor: Color,
      //fileTypeSupport: any,
  
      style?: any,
      minimumInteritemSpacing: number,
      minimumLineSpacing: number,
      imageStrokeColor?: Color,
      imageStrokeColorWidth?: number,
      albumName: string,
      columnCount: number,
      onTapImage?: (event: { nativeEvent: { selected: string } }) => void,
      selectedImages?: string[]
      selection?: {
        enable?: boolean,
        imagePosition?: 'bottom-right',
        selectedImage?: any,
        imageSizeAndroid?: 'large',
        overlayColor?: Color,
      },
      customButtonStyle?: {
        image: any,
        backgroundColor?: Color
      },
      onCustomButtonPress?: () => void,
    }) => JSX.Element,
    const CameraKitCameraScreen: any;
    export {
      CameraKitGallery,
      CameraKitCamera,
      CameraKitGalleryView,
      CameraKitCameraScreen
    };
  }
  