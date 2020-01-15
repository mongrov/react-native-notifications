package com.wix.reactnativenotifications.core.notification;

import android.os.Bundle;

public class PushNotificationProps {

    protected Bundle mBundle;

    public PushNotificationProps(Bundle bundle) {
        mBundle = bundle;
    }

    public String getTitle() {
        return mBundle.getString("title");
    }

    public String getBody() {
        String str=mBundle.getString("body");
        return (str != null && !str.isEmpty())?str:mBundle.getString("message");
    }

    public Bundle asBundle() {
        return (Bundle) mBundle.clone();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder(1024);
        for (String key : mBundle.keySet()) {
            sb.append(key).append("=").append(mBundle.get(key)).append(", ");
        }
        return sb.toString();
    }

    protected PushNotificationProps copy() {
        return new PushNotificationProps((Bundle) mBundle.clone());
    }
}
