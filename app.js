const { reduce, map } = require("lodash");

let json = {
    "metrics_cart_activity": {
        "scopes": [{ "value": "read", "id": "metrics_cart_activity_read" }],
        "id": "metrics_cart_activity"
    },
    "automation": {
        "scopes": [{ "value": "read", "id": "automation_read" }],
        "id": "automation"
    },
    "referral": {
        "scopes": [
            { "value": "write", "id": "referral_write" },
            { "value": "read", "id": "referral_read" },
        ],
        "id": "referral"
    },
    "referral_email": {
        "scopes": [{ "value": "write", "id": "referral_email_write" }],
        "id": "referral"
    },
    "customers": {
        "scopes": [{ "value": "read", "id": "customers_read" }],
        "id": "customers"
    },
    "integrations": { "scopes": [], "id": "integrations" },
    "settings": {
        "scopes": [{ "value": "read", "id": "settings_read" }],
        "id": "settings"
    },
    "stores": { "scopes": [], "id": "stores" }
}

  // console.log("Scope iterate:",scope)
        // if (scope.value === "read") {
        //     console.log("scope value:",scope.value)
        //     i.read.push(scope.id)
        // }
        // else {
        //     console.log("scope write value:",scope.value)
        //     i.write.push(scope.id)
        // }

const data = reduce(json, (i, resource, resourceIndex) => {
    map(resource.scopes, (scope) => {
      
        
        if(scope.value === "read") i.read.push(scope.id);
            else  i.write.push(scope.id)
    })
    return i;
}, { read: [], write: [] })

console.log("data", data)