$(document).ready(function(){ randomquote();
                             var  qTweet="OK";
  function randomquote(){
    var qPool=['There is a natural aristocracy among men. The grounds of this are virtue and                    talents.@Thomas Jefferson',
               'All our words from loose using have lost their edge.@Ernest Hemingway',
               'God could not be everywhere, so he created mothers.@Jewish proverb',
               'Be not afraid of going slowly, be afraid only of standing still.@Chinese proverb',
               'Do not confine your children to your own learning, for they were born in another time.@Chinese proverb',
               'I hear and I forget, I see and I remember. I do and I understand.@Chinese proverb',
               'Happiness will never come to those who fail to appreciate what they already have.@Anonymous'
               
        ];
      var randomQuote=qPool[Math.floor(Math.random()*qPool.length)];
    qTweet=randomQuote;
    var finalQuote=randomQuote.split('@');
    $(".saying").text(finalQuote[0]);
    $(".author").text(finalQuote[1]);
    }
                             
  $(".btn-danger").click(function(){
    randomquote();
  });
  $(".btn-info").click(function(){
     var tweetUrl = 'https://twitter.com/share?text=' +qTweet + "'";
    window.open(tweetURL);
    
  })
                       
   
});

