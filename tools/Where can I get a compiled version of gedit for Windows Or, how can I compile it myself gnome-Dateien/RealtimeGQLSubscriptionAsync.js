(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["RealtimeGQLSubscriptionAsync"],{"./src/realtime/GQLSubscription/index.tsx":function(e,n,t){"use strict";t.r(n);var s=t("./node_modules/@apollo/client/core/ApolloClient.js"),i=t("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),u=t("./node_modules/@apollo/client/react/hooks/useSubscription.js"),o=t("./node_modules/@apollo/client/link/ws/index.js"),a=t("./node_modules/react/index.js"),r=t.n(a),c=t("./node_modules/react-redux/es/index.js"),b=t("./node_modules/graphql-tag/lib/index.js");var p={postVoteCount:b.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on VoteCountUpdateMessageData {
              voteCountChange
            }
          }
        }
      }
    }
  `,postCommentCount:b.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on CommentCountUpdateMessageData {
              commentCountChange
            }
          }
        }
      }
    }
  `,topLevelCommentCountChange:b.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on CommentCountUpdateMessageData {
              topLevelCommentCountChange
            }
          }
        }
      }
    }
  `,userIsTypingOnPost:b.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,postTypingIndicator:b.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on PostTypingIndicatorMessageData {
              numUsers
            }
          }
        }
      }
    }
  `,userIsOnline:b.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,isUserOnline:b.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on UserOnlineStatusMessageData {
              isOnline
            }
          }
        }
      }
    }
  `,userIsReadingPost:b.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,usersReadingIndicator:b.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on PostReadingCountMessageData {
              numUsers
            }
          }
        }
      }
    }
  `},l=t("./node_modules/subscriptions-transport-ws/dist/client.js"),d=t("./src/config.ts");function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}let g;const S={reconnect:!0,reconnectionAttempts:6,lazy:!0,timeout:3e4,inactivityTimeout:15e3},C={name:"web2x",version:"0.0.1"},$=r.a.memo(e=>{let{apolloClient:n,onData:t,onError:s,onLoading:i,queryKey:o,subscriptionQueries:a,variables:r}=e;const c=a[o],{data:b,loading:p,error:l}=Object(u.a)(c,{variables:r,client:n});return l?s&&s():p?i&&i():!l&&!p&&b&&b.subscribe&&b.subscribe.data&&t&&t(b),null});n.default=e=>{const[n,t]=Object(a.useState)(g),u=Object(c.e)(e=>e.user.session);Object(a.useEffect)(()=>{g||(g=function(){let e;return{getInstance:()=>(e||(e=function(){const e=new o.a(new l.SubscriptionClient(`wss://${d.a.gqlRealtimeAddress}`,{...S,connectionParams:{Authorization:u&&u.accessToken?`Bearer ${u.accessToken}`:""}}));return new s.a({...C,cache:new i.a,link:e})}()),e)}}(),t(g)),g&&!n&&t(g)},[u,t,n]);const b=Object(a.useRef)((e=>{if(e){return!!document.getElementById(e)}return!1})(e.uniqueKey));return n&&n.getInstance()&&p&&!b.current?n&&r.a.createElement(r.a.Fragment,null,r.a.createElement($,m({},e,{apolloClient:n.getInstance(),subscriptionQueries:p})),r.a.createElement("span",{id:e.uniqueKey})):null}}}]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.226119a9ae841bb563eb.js.map