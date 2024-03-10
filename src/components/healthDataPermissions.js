import React, { useEffect } from "react";
import AppleHealthKit, {
  HealthValue,
  HealthKitPermissions,
} from "react-native-health";

const HealthDataScreen = () => {
  useEffect(() => {
    /* Permission options */
    const permissions = {
      permissions: {
        read: [AppleHealthKit.Constants.Permissions.HeartRate],
        write: [AppleHealthKit.Constants.Permissions.Steps],
      },
    };

    AppleHealthKit.initHealthKit(permissions, (error) => {
      /* Called after we receive a response from the system */
      if (error) {
        console.log("[ERROR] Cannot grant permissions!");
      }

      /* Can now read or write to HealthKit */
      const options = {
        startDate: new Date(2020, 1, 1).toISOString(),
      };

      AppleHealthKit.getHeartRateSamples(options, (callbackError, results) => {
        /* Samples are now collected from HealthKit */
      });
    });
  }, []); // Empty dependency array means this effect will only run once after mounting

  return (
    /* Your JSX for the health data screen */
    <></>
  );
};

export default HealthDataScreen;
