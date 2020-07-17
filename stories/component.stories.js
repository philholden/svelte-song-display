import { action } from "@storybook/addon-actions";
import Component from "../src/index";

export default {
  title: "Component",
  component: Component,
};

export const Default = () => ({
  Component: Component,
  props: {
    style: `width: 60%; height: 360px; resize: both; overflow: auto`,
  },
  //  on: { click: action('clicked') },
});

export const ShowSong = () => ({
  Component: Component,
  props: {
    style: `width: 60%; height: 360px; resize: both; overflow: auto`,
    showSong: true,
    text: `Stand up, stand up for Jesus,
Ye soldiers of the cross;
Lift high his royal banner,
It must not suffer loss.
From victory unto victory
His army shall he lead,
Till every foe is vanquished,
And Christ is Lord indeed.

Stand up, stand up for Jesus,
Stand in his strength alone;
The arm of flesh will fail you,
Ye dare not trust your own.
Put on the gospel armor,
Each piece put on with prayer;
Where duty calls or danger,
Be never wanting there.

Stand up, stand up for Jesus,
The strife will not be long;
This day the noise of battle,
The next the victor's song.
To those who vanquish evil
A crown of life shall be;
They with the King of Glory
Shall reign eternally.`,
  },
});

export const Verse = () => ({
  Component: Component,
  props: {
    style: `width: 60%; height: 360px; resize: both; overflow: auto`,
    verseId: 1,
    text: `Stand up, stand up for Jesus,
Ye soldiers of the cross;
Lift high his royal banner,
It must not suffer loss.
From victory unto victory
His army shall he lead,
Till every foe is vanquished,
And Christ is Lord indeed.

Stand up, stand up for Jesus,
Stand in his strength alone;
The arm of flesh will fail you,
Ye dare not trust your own.
Put on the gospel armor,
Each piece put on with prayer;
Where duty calls or danger,
Be never wanting there.

Stand up, stand up for Jesus,
The strife will not be long;
This day the noise of battle,
The next the victor's song.
To those who vanquish evil
A crown of life shall be;
They with the King of Glory
Shall reign eternally.`,
  },
});

export const Blank = () => ({
  Component: Component,
  props: {
    style: `width: 60%; height: 360px; resize: both; overflow: auto`,
    blank: true,
    verseId: 1,
    text: `Stand up, stand up for Jesus,
Ye soldiers of the cross;
Lift high his royal banner,
It must not suffer loss.
From victory unto victory
His army shall he lead,
Till every foe is vanquished,
And Christ is Lord indeed.

Stand up, stand up for Jesus,
Stand in his strength alone;
The arm of flesh will fail you,
Ye dare not trust your own.
Put on the gospel armor,
Each piece put on with prayer;
Where duty calls or danger,
Be never wanting there.

Stand up, stand up for Jesus,
The strife will not be long;
This day the noise of battle,
The next the victor's song.
To those who vanquish evil
A crown of life shall be;
They with the King of Glory
Shall reign eternally.`,
  },
});

export const fillColor = () => ({
  Component: Component,
  props: {
    style: `width: 60%; height: 360px; resize: both; overflow: auto`,
    verseId: 1,
    fillStyle: "#3cf",
    text: `Stand up, stand up for Jesus,
Ye soldiers of the cross;
Lift high his royal banner,
It must not suffer loss.
From victory unto victory
His army shall he lead,
Till every foe is vanquished,
And Christ is Lord indeed.

Stand up, stand up for Jesus,
Stand in his strength alone;
The arm of flesh will fail you,
Ye dare not trust your own.
Put on the gospel armor,
Each piece put on with prayer;
Where duty calls or danger,
Be never wanting there.

Stand up, stand up for Jesus,
The strife will not be long;
This day the noise of battle,
The next the victor's song.
To those who vanquish evil
A crown of life shall be;
They with the King of Glory
Shall reign eternally.`,
  },
});

export const fontWeightColor = () => ({
  Component: Component,
  props: {
    style: `width: 60%; height: 360px; resize: both; overflow: auto`,
    verseId: 1,
    fontWeight: "italic bold",
    text: `Stand up, stand up for Jesus,
Ye soldiers of the cross;
Lift high his royal banner,
It must not suffer loss.
From victory unto victory
His army shall he lead,
Till every foe is vanquished,
And Christ is Lord indeed.

Stand up, stand up for Jesus,
Stand in his strength alone;
The arm of flesh will fail you,
Ye dare not trust your own.
Put on the gospel armor,
Each piece put on with prayer;
Where duty calls or danger,
Be never wanting there.

Stand up, stand up for Jesus,
The strife will not be long;
This day the noise of battle,
The next the victor's song.
To those who vanquish evil
A crown of life shall be;
They with the King of Glory
Shall reign eternally.`,
  },
});
