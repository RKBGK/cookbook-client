import React, {useState, useEffect} from "react";
import { getSubscriptions } from "./SubscriptionManager";

export const SubscriptionList = (user) => {
    const [ subscriptions, setSubscription] = useState([])
    const user1=localStorage.getItem("user")
    console.log('user',user)
    console.log('user1',user1)

    useEffect(() => {
        getSubscriptions(user1).then(data => setSubscription(data))
    }, [])


    return (

        <>
           <article className="subscriptions">
            <h1>hi</h1>
          
   

                {
                    subscriptions.map(subscription => {
                        return <section key={`subscription--${subscription.id}`} className="card">
                          
                            <div className="subscription_chef">chef {subscription.chef}</div>
                            <div className="subscription_follower">follower {subscription.follower}</div>

                        </section>
                    })
                }
            </article>

        </>
    )


}
