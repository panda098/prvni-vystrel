<?php

namespace App\Controller;

use App\Entity\Player;
use App\Entity\Team;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    #[Route('/api', name: 'app_api')]
    public function index(Request $request, EntityManagerInterface $em): JsonResponse
    {
        
        $content = json_decode($request->getContent());

        if(is_null($content) || !property_exists($content, 'teamName') || !property_exists($content, 'isLookingForPlayers') 
            || !property_exists($content, 'players') || !is_array($content->players) ) {
            throw new BadRequestHttpException();
        }

        $team = (new Team())
            ->setName($content->teamName)
            ->setIsLookingForPlayers($content->isLookingForPlayers);

        $em->persist($team);

        foreach($content->players as $p) {
            
            $player = new Player();
            $player->setName($p->name);
            $player->setSurname($p->surname);

            if(property_exists($p,'email')) {
                $player->setEmail($p->email);
            }

            $player->setTeam($team);
            $em->persist($player);
        }

        $em->flush();
        
        return $this->json([
            'status' => 200
        ]);
    }

    #[Route('/admin', name: 'admin')]
    public function admin(EntityManagerInterface $em): Response
    {
        return $this->render('admin.html.twig', [
            'teams' => $em->getRepository(Team::class)->findAll(),
            'players' => $em->getRepository(Player::class)->findAll()
        ]);
    }
}
