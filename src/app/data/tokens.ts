import { InjectionToken, OpaqueToken } from "@angular/core";

export var API_ENDPOINT_TOKEN = new OpaqueToken("API_TOKEN");
export var CONFIRM_GUARD = new InjectionToken("ConfirmNavigationGuard")