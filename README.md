# Hackdata

[Video (Google Drive)](https://drive.google.com/file/d/1O2SIA_fRIh_hoyWS_uA0BSJknZQm4fTn/view?usp=sharing)

Our project predicts flood on state regions using based on these parameters: the precipitation level on which the mishappening took place and the elevation level of that place.

We found a reliable trend from the chaotic nature of the two parameters took side by side.

 ![Screenshot from 2024-02-04 11-12-19](https://github.com/Hackdata2024/15-tec/assets/70335252/1f357e49-33da-4a5f-8f58-037671b8116a)

This is the `elevation vs precipitation` graph that looks very chaotic, but

![170702557063995244](https://github.com/Hackdata2024/15-tec/assets/70335252/15a9cb6a-5668-44a8-b26c-356bbd93941f)


It has this very subtle but beautiul deacying trend which can be easily approximated to a linear decreasing graph.

![model](https://github.com/Hackdata2024/15-tec/assets/70335252/60320835-dae9-49df-ad05-5c3a14361480)

The equation $\`y = -0.58x + 1462$\`, was the model we were looking for.

This is 90% accurate to the data collected:

![Screenshot from 2024-02-04 11-04-23](https://github.com/Hackdata2024/15-tec/assets/70335252/5315b269-c263-42bc-8895-101cc7cf2c43)


Predicting two previous flood events

![Screenshot from 2024-02-04 11-04-54](https://github.com/Hackdata2024/15-tec/assets/70335252/5f35c356-c8a6-4a38-8efa-c41f9ee0104f)


### Frontend
We used the mathematical model and integrated it with our site to provide a *yes/no* prediction out of the two parameters that are being collected from the openweatherapi.

 - Live site: https://tectonix.netlify.app
 - Run on your machine:
   ```
   1. Clone the repo
   2. cd frontend
   3. npm run dev
   ```

