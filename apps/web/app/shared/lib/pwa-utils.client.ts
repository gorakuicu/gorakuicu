/*
  Project Fugu APIs
  &
  other client-side Service Worker methods & APIs for PWAs
*/

/*
  ⚠ Except you understand & know the implication of what you're doing, don't modify this file! ⚠
*/

/**
 * Response Object returned by Client APIs. It serves as a good debugging
 * and error-checking method.
 */

interface ResponseObject {
  message: string;
  status: 'bad' | 'success';
}

const WEBSHARE_NOT_SOPPORTED = 'Web Share API not supported';

// Clipboard Copy API

/**
 * Copies text to the clipboard of the device.
 *
 * @param {string} text - The text to copy to the device
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function copyText(text: string): Promise<ResponseObject> {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return {
        message: 'Copied to clipboard',
        status: 'success',
      };
    } else {
      return {
        message: 'Your browser does not support clipboard API',
        status: 'bad',
      };
    }
  } catch (error) {
    console.debug(error);
    throw new Error('Unable to copy text to clipboard!');
  }
}

// Handle connectivity check and return one of the specifics

/**
 * Check wether the device is currently online and execute some function with respect to the user's device connectivity state.
 *
 * @param {() => void} online - A function to be invoked if the device is online.
 * @param {() => void} offline - A function to be invoked if the device is not connected to an internet network.
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function checkConnectivity(
  online: () => void,
  offline: () => void,
): Promise<ResponseObject> {
  try {
    if (navigator.onLine) {
      online();
      return {
        message: 'Connected to the internet',
        status: 'success',
      };
    } else {
      offline();
      return {
        message: 'No internet connection available',
        status: 'bad',
      };
    }
  } catch (error) {
    console.debug(error);
    throw new Error('Unable to check network connectivity!');
  }
}

// Keep device awake for a determined period of time

/**
 * Trigger the WakeLock API to keep the device's screen on.
 *
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function WakeLock(): Promise<ResponseObject> {
  try {
    if ('wakeLock' in navigator) {
      // This is an experimental feature!

      //@ts-ignore
      const wakelock = await navigator.wakeLock.request('screen');
      return wakelock
        ? {
            message: 'WakeLock activated!',
            status: 'success',
          }
        : {
            message: 'WakeLock activation failed!',
            status: 'bad',
          };
    } else {
      return {
        message: 'Your browser does not support WakeLock API!',
        status: 'bad',
      };
    }
  } catch (error) {
    console.debug(error);
    throw new Error('Error activating WakeLock!');
  }
}

// Badge creator

/**
 * Display a notification badge with a number count on the app's icon.
 *
 * @param {number} numberCount - The number of notifications that would be displayed on the App's Badge.
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function addBadge(numberCount: number): Promise<ResponseObject> {
  try {
    //@ts-ignore
    if (navigator.setAppBadge) {
      //@ts-ignore
      await navigator.setAppBadge(numberCount);
      return {
        message: 'Badge successfully added',
        status: 'success',
      };
    } else {
      return {
        message: 'Badging API not supported',
        status: 'bad',
      };
    }
  } catch (error) {
    console.debug(error);
    throw new Error('Error adding badge!');
  }
}

// remove Badges

/**
 * Remove all notification badges from the App.
 *
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function removeBadge(): Promise<ResponseObject> {
  try {
    //@ts-ignore
    if (navigator.clearAppBadge) {
      //@ts-ignore
      await navigator.clearAppBadge();
      return {
        message: 'Cleared badges',
        status: 'success',
      };
    } else {
      return {
        message: 'Badging API not supported in this browser!',
        status: 'bad',
      };
    }
  } catch (error) {
    console.debug(error);
    throw new Error('Error removing badge!');
  }
}

// Enable Full-Screen mode for an app

/**
 * Trigger full-screen mode on an element/page.
 *
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function EnableFullScreenMode(): Promise<ResponseObject> {
  try {
    if (document.fullscreenEnabled) {
      await document.documentElement.requestFullscreen();
      return {
        message: 'Fullscreen mode activated',
        status: 'success',
      };
    } else {
      return {
        message: 'Fullscreen mode not supported',
        status: 'bad',
      };
    }
  } catch (error) {
    console.debug(error);
    throw new Error('Error activating fullscreen mode!');
  }
}

// Exit fullscreen mode

/**
 * Exit full-screen mode on an element/page.
 *
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function ExitFullScreenMode(): Promise<ResponseObject> {
  try {
    if (document.exitFullscreen) {
      await document.exitFullscreen();
      return {
        message: 'Fullscreen mode deactivated',
        status: 'success',
      };
    } else {
      return {
        message: 'Fullscreen mode not supported',
        status: 'bad',
      };
    }
  } catch (error) {
    console.debug(error);
    throw new Error('Error deactivating fullscreen mode!');
  }
}

// Send a client notification to the user

interface NotificationOptions {
  badge?: string;
  body: 'Notification body' | string;
  icon?: string;
  image?: string;
  silent: boolean | false;
}

/**
 * Trigger a notification client-side based on anything!
 *
 * @param {string} title - The main title (header) of the notification
 * @param {NotificationOptions} options - An object consisting of the notification's body, badge, icon, image, and silent options. Refer to https://github.com/ShafSpecs/remix-pwa#client-notification-api for additional info.
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function SendNotification(
  title: string,
  options: NotificationOptions,
): Promise<ResponseObject> {
  try {
    if ('Notification' in window) {
      const permissionBase = await navigator.permissions.query({
        name: 'notifications',
      });
      const permission = permissionBase.state;

      let requestedPermission: NotificationPermission | null = null;

      // Send permission request only if the permission is not granted neither denied.
      if (permission === 'prompt') {
        requestedPermission = await Notification.requestPermission();
      }

      if (permission === 'granted' || requestedPermission === 'granted') {
        const registration = await navigator.serviceWorker.ready;
        await registration.showNotification(title, options);
        return {
          message: 'Sent Notification to user successfully',
          status: 'success',
        };
      } else {
        return {
          message: 'Denied access to sending notifications!',
          status: 'bad',
        };
      }
    } else {
      return {
        message: 'Notification API not supported',
        status: 'bad',
      };
    }
  } catch (error) {
    console.debug(error);
    throw new Error('Error sending notification!');
  }
}

// Page focus

/**
 * Check wether an element is currently visible or not.
 *
 * @param {() => void} isVisible - A function to be invoked if the element is currently visible on the page.
 * @param {() => void} notVisible - A function to be invoked if the element is not visible on the current page.
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function Visibility(
  isVisible: () => void,
  notVisible: () => void,
): Promise<ResponseObject> {
  try {
    if (document.visibilityState) {
      const visibleState = document.visibilityState;

      if (visibleState === 'visible') {
        isVisible();
        return {
          message: 'Page is focused and being viewed!',
          status: 'success',
        };
      } else {
        notVisible();
        return {
          message: 'Page is not currently being viewed!',
          status: 'bad',
        };
      }
    }

    return {
      message: 'Page focus API not supported',
      status: 'bad',
    };
  } catch (error) {
    console.debug(error);
    throw new Error('Error checking page visibility!');
  }
}

// Copying Image to the clipboard

/**
 * Copy an image to a device's clipboard.
 *
 * @param {string} url - The url of the string to be copied.
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function copyImage(url: string): Promise<ResponseObject> {
  try {
    if (navigator.clipboard) {
      const data = await fetch(url);
      const fileBlob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [fileBlob.type]: fileBlob,
        }),
      ]);
      return {
        message: 'Image copied successfully!',
        status: 'success',
      };
    } else {
      return {
        message: 'Copy Image API not supported on your device!',
        status: 'bad',
      };
    }
  } catch {
    throw new Error('Error occured while copying image to clipboard!');
  }
}

// Sharing information straight to other apps from PWA.

/**
 * Share info/links/random stuffs from your PWA to other apps.
 *
 * @param {any} data - The data to be shared.
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function WebShare(data: any): Promise<ResponseObject> {
  try {
    if (navigator.share && navigator.canShare(data)) {
      await navigator.share(data);
      return {
        message: 'Shared links accordingly!',
        status: 'success',
      };
    } else {
      return {
        message: WEBSHARE_NOT_SOPPORTED,
        status: 'bad',
      };
    }
  } catch {
    throw new Error('Failed to share for some weird reason 🤷‍♂️!');
  }
}

// Custom handler to share link to other apps from your app

/**
 * Share a link to other apps from your app.
 *
 * @param {string} url - The URL of the link to be shared.
 * @param {string} title - The title of the shared link embed.
 * @param {string} text - An accompanying text alongside the header.
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function WebShareLink(
  url: string,
  title: string,
  text: string,
): Promise<ResponseObject> {
  try {
    if (navigator.canShare({ url })) {
      await navigator.share({
        text: text,
        title: title,
        url: url,
      });
      return {
        message: 'Shared link accordingly!',
        status: 'success',
      };
    } else {
      return {
        message: WEBSHARE_NOT_SOPPORTED,
        status: 'bad',
      };
    }
  } catch {
    throw new Error('Failed to share for some weird reason 🤷‍♂️!');
  }
}

// Special Web Share API for sharing files to your App.

/**
 * Share a file (or array of files) to other apps directly from your PWA.
 *
 * @param {string} title - The title of the shared link embed.
 * @param {any} data - An array of the files to be shared (e.g Images, PDFs, etc).
 * @param {string} text - An accompanying text alongside the header.
 * @return {Promise<ResponseObject>} An object consisting of two properties: A status to indicate the status of the invocation and also an accompanying message.
 */
export async function WebShareFile(
  title: string,
  data: any[],
  text: string,
): Promise<ResponseObject> {
  let filesArray = [...data];
  try {
    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
      await navigator.share({
        files: filesArray,
        text: text,
        title: title,
      });
      return {
        message: 'Shared file accordingly!',
        status: 'success',
      };
    } else {
      return {
        message: WEBSHARE_NOT_SOPPORTED,
        status: 'bad',
      };
    }
  } catch {
    throw new Error('Error occured sharing file!');
  }
}
