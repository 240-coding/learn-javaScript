var phrase = ['"자존심은 어리석은 자의 소유물이다"', '"후회를 최대한 이용하라. 깊이 후회한다는 것은 새로운 삶을 산다는 것이다."', '"인생의 비극이란 사람들이 삶을 사는 동안 내면에서 잃어가는 것들이다."', '"우리를 조금 크게 만드는데 걸리는 시간은 단 하루면 충분하다."', '"순간들을 소중히 여기다 보면, 긴 세월은 저절로 흘러간다."'];
var generateRandom = function (min, max) {
    var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
    return ranNum;
  }
var num = generateRandom(0, phrase.length - 1);

document.write(phrase[num]);